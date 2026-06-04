import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { randomBytes } from 'crypto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';
import { RedisService } from 'src/redis/redis.service';
import { mapTrip } from './responses/trip.mapper';

@Injectable()
export class TripsService {

  constructor(
    private prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  async create(dto: CreateTripDto, user: any) {

    return this.prisma.trip.create({
      data: {
        title: dto.title,
        description: dto.description || null,
        travelStyle: dto.travelStyle,
        vibe: dto.vibe,
        budgetRange: dto.budgetRange,
        travelerCount: dto.travelerCount ?? 1,
        userId: user.sub, // from JWT
      },
    });
  }

  async findAll( userId: string, filters: any, ) {
    const cacheKey = `trips:user:${userId}:${JSON.stringify(filters)}`;
    const redis = this.redisService.getClient();
    const cached = await redis.get(cacheKey);

    if (cached) {
      console.log(
        'TRIPS CACHE HIT',
      );
      return JSON.parse(cached);
    }

    console.log('TRIPS CACHE MISS',);

    const trips = await this.prisma.trip.findMany({
        where: {
          userId,
          status:
            filters.status ??
            undefined,

          travelStyle:
            filters.travelStyle ??
            undefined,

          vibe:
            filters.vibe ??
            undefined,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    await redis.set(cacheKey, JSON.stringify(trips),
      {
        EX: 600,
      },
    );

    return trips.map(mapTrip);
  }

  async findOne(tripId: string, userId: string) {
    const trip = await this.prisma.trip.findFirst({
      where: {
        id: tripId,
        userId, // ownership check
      },

      include: {
        tripDestinations: {
          orderBy: {
            visitOrder: 'asc',
          }, 

          include: {
            destination: true,
          },
        },
      },
    });
    return mapTrip(trip);
  }

  async addDestination(tripId: string, userId: string, dto: any) {

    // 1. Check trip ownership
    const trip = await this.prisma.trip.findFirst({
      where: {
        id: tripId,
        userId,
      },
    });

    if (!trip) {
      throw new Error('Trip not found');
    }

    // 2. Auto visit order if not provided
    const lastStop = await this.prisma.tripDestination.findFirst({
      where: { tripId },
      orderBy: { visitOrder: 'desc' },
    });

    const nextOrder = dto.visitOrder ?? (lastStop?.visitOrder ?? 0) + 1;

    // 3. Create trip destination
    return this.prisma.tripDestination.create({
      data: {
        tripId,
        destinationId: dto.destinationId,
        visitOrder: nextOrder,
        arrivalDate: dto.arrivalDate ? new Date(dto.arrivalDate) : null,
        departureDate: dto.departureDate ? new Date(dto.departureDate) : null,
        notes: dto.notes,
      },
    });
  }

  async reorder(tripId: string, orderedIds: string[], userId: string) {
    
    // STEP 1: ownership check
    const trip = await this.prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip || trip.userId !== userId) {
      throw new ForbiddenException('You cannot modify this trip');
    }

    // STEP 2: reorder logic (we did earlier)
    return this.prisma.$transaction(async (tx) => {
      for (let i = 0; i < orderedIds.length; i++) {
        await tx.tripDestination.updateMany({
          where: {
            tripId,
            destinationId: orderedIds[i],
          },
          data: {
            visitOrder: i + 1,
          },
        });
      }
    });
  }

  async duplicateTrip(tripId: string, userId: string) {
    const trip = await this.prisma.trip.findUnique({
      where: { id: tripId },
      include: { tripDestinations: true },
    });

    if (!trip || trip.userId !== userId) {
      throw new ForbiddenException("You don't have permission to duplicate this trip");
    }

    const newTrip = await this.prisma.trip.create({
      data: {
        userId: trip.userId,
        title: trip.title + ' (Copy)',
        description: trip.description,
        status: 'DRAFT',
        travelStyle: trip.travelStyle,
        vibe: trip.vibe,
        budgetRange: trip.budgetRange,
        startDate: trip.startDate,
        endDate: trip.endDate,
        travelerCount: trip.travelerCount,
        isPublic: false,
        shareToken: null,
      },
    });

    await this.prisma.tripDestination.createMany({
      data: trip.tripDestinations.map((d) => ({
        tripId: newTrip.id,
        destinationId: d.destinationId,
        visitOrder: d.visitOrder,
        arrivalDate: d.arrivalDate,
        departureDate: d.departureDate,
        nights: d.nights,
        notes: d.notes,
      })),
    });

    return {
      message: 'Trip duplicated successfully',
      newTripId: newTrip.id,
    };
  }

  async generateShareLink(
    tripId: string,
    userId: string,
  ) {

    const trip = await this.prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip || trip.userId !== userId) {
      throw new ForbiddenException(
        'You do not own this trip',
      );
    }

    const token = randomBytes(32).toString('hex');

    await this.prisma.trip.update({
      where: {
        id: tripId,
      },
      data: {
        shareToken: token,
        isPublic: true,
      },
    });

    return {
      shareToken: token,
      shareUrl: `http://localhost:3000/trips/share/${token}`,
    };
  }

  async getSharedTrip(token: string) {

    const trip = await this.prisma.trip.findFirst({
      where: {
        shareToken: token,
        isPublic: true,
      },

      include: {
        tripDestinations: {
          orderBy: {
            visitOrder: 'asc',
          },

          include: {
            destination: true,
          },
        },
      },
    });

    if (!trip) {
      throw new NotFoundException(
        'Shared trip not found',
      );
    }

    return trip;
  }

  async updateTrip(
    tripId: string,
    dto: UpdateTripDto,
    userId: string,
  ) {

    const trip = await this.prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) {
      throw new NotFoundException(
        'Trip not found',
      );
    }

    if (trip.userId !== userId) {
      throw new ForbiddenException(
        'You do not own this trip',
      );
    }

    let totalDays = trip.totalDays;

    const startDate =
      dto.startDate
        ? new Date(dto.startDate)
        : trip.startDate;

    const endDate =
      dto.endDate
        ? new Date(dto.endDate)
        : trip.endDate;

    if (startDate && endDate) {
      totalDays =
        Math.ceil(
          (
            endDate.getTime() -
            startDate.getTime()
          ) /
          (1000 * 60 * 60 * 24),
        ) + 1;
    }

    return this.prisma.trip.update({
      where: {
        id: tripId,
      },
      data: {
        ...dto,

        startDate: dto.startDate
          ? new Date(dto.startDate)
          : undefined,

        endDate: dto.endDate
          ? new Date(dto.endDate)
          : undefined,

        totalDays,
      },
    });
  }

  async deleteTrip(
    tripId: string,
    userId: string,
  ) {

    const trip = await this.prisma.trip.findUnique({
      where: {
        id: tripId,
      },
    });

    if (!trip) {
      throw new NotFoundException(
        'Trip not found',
      );
    }

    if (trip.userId !== userId) {
      throw new ForbiddenException(
        'You do not own this trip',
      );
    }

    await this.prisma.trip.delete({
      where: {
        id: tripId,
      },
    });

    return {
      message: 'Trip deleted successfully',
    };
  }

  async updateTripDestination(
    tripId: string,
    stopId: string,
    dto: UpdateTripDestinationDto,
    userId: string,
  ) {

    const trip =
      await this.prisma.trip.findUnique({
        where: {
          id: tripId,
        },
      });

    if (!trip) {
      throw new NotFoundException(
        'Trip not found',
      );
    }

    if (trip.userId !== userId) {
      throw new ForbiddenException(
        'You do not own this trip',
      );
    }

    const stop =
      await this.prisma.tripDestination.findUnique({
        where: {
          id: stopId,
        },
      });

    if (!stop) {
      throw new NotFoundException(
        'Trip destination not found',
      );
    }

    const arrivalDate =
      dto.arrivalDate
        ? new Date(dto.arrivalDate)
        : stop.arrivalDate;

    const departureDate =
      dto.departureDate
        ? new Date(dto.departureDate)
        : stop.departureDate;

    let nights = stop.nights;

    if (arrivalDate && departureDate) {

      nights = Math.ceil(
        (
          departureDate.getTime() -
          arrivalDate.getTime()
        ) /
        (1000 * 60 * 60 * 24),
      );
    }

    return this.prisma.tripDestination.update({
      where: {
        id: stopId,
      },
      data: {

        arrivalDate: dto.arrivalDate
          ? new Date(dto.arrivalDate)
          : undefined,

        departureDate: dto.departureDate
          ? new Date(dto.departureDate)
          : undefined,

        notes: dto.notes,

        nights,
      },
    });
  }

  async removeTripDestination(
    tripId: string,
    stopId: string,
    userId: string,
  ) {

    const trip = await this.prisma.trip.findUnique({
      where: {
        id: tripId,
      },
    });

    if (!trip) {
      throw new NotFoundException(
        'Trip not found',
      );
    }

    if (trip.userId !== userId) {
      throw new ForbiddenException(
        'You do not own this trip',
      );
    }

    const stop =
      await this.prisma.tripDestination.findUnique({
        where: {
          id: stopId,
        },
      });

    if (!stop) {
      throw new NotFoundException(
        'Trip destination not found',
      );
    }

    await this.prisma.$transaction(
      async (tx) => {

        await tx.tripDestination.delete({
          where: {
            id: stopId,
          },
        });

        const remainingStops =
          await tx.tripDestination.findMany({
            where: {
              tripId,
            },
            orderBy: {
              visitOrder: 'asc',
            },
          });

        for (
          let i = 0;
          i < remainingStops.length;
          i++
        ) {

          await tx.tripDestination.update({
            where: {
              id: remainingStops[i].id,
            },
            data: {
              visitOrder: i + 1,
            },
          });

        }

      },
    );

    return {
      message:
        'Destination removed successfully',
    };
  }
}
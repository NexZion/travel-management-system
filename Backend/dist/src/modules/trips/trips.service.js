"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const crypto_1 = require("crypto");
const redis_service_1 = require("../../redis/redis.service");
const trip_mapper_1 = require("./responses/trip.mapper");
let TripsService = class TripsService {
    prisma;
    redisService;
    constructor(prisma, redisService) {
        this.prisma = prisma;
        this.redisService = redisService;
    }
    async create(dto, user) {
        return this.prisma.trip.create({
            data: {
                title: dto.title,
                description: dto.description || null,
                travelStyle: dto.travelStyle,
                vibe: dto.vibe,
                budgetRange: dto.budgetRange,
                travelerCount: dto.travelerCount ?? 1,
                userId: user.sub,
            },
        });
    }
    async findAll(userId, filters) {
        const cacheKey = `trips:user:${userId}:${JSON.stringify(filters)}`;
        const redis = this.redisService.getClient();
        const cached = await redis.get(cacheKey);
        if (cached) {
            console.log('TRIPS CACHE HIT');
            return JSON.parse(cached);
        }
        console.log('TRIPS CACHE MISS');
        const trips = await this.prisma.trip.findMany({
            where: {
                userId,
                status: filters.status ??
                    undefined,
                travelStyle: filters.travelStyle ??
                    undefined,
                vibe: filters.vibe ??
                    undefined,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        await redis.set(cacheKey, JSON.stringify(trips), {
            EX: 600,
        });
        return trips.map(trip_mapper_1.mapTrip);
    }
    async findOne(tripId, userId) {
        const trip = await this.prisma.trip.findFirst({
            where: {
                id: tripId,
                userId,
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
        return (0, trip_mapper_1.mapTrip)(trip);
    }
    async addDestination(tripId, userId, dto) {
        const trip = await this.prisma.trip.findFirst({
            where: {
                id: tripId,
                userId,
            },
        });
        if (!trip) {
            throw new Error('Trip not found');
        }
        const lastStop = await this.prisma.tripDestination.findFirst({
            where: { tripId },
            orderBy: { visitOrder: 'desc' },
        });
        const nextOrder = dto.visitOrder ?? (lastStop?.visitOrder ?? 0) + 1;
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
    async reorder(tripId, orderedIds, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: { id: tripId },
        });
        if (!trip || trip.userId !== userId) {
            throw new common_1.ForbiddenException('You cannot modify this trip');
        }
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
    async duplicateTrip(tripId, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: { id: tripId },
            include: { tripDestinations: true },
        });
        if (!trip || trip.userId !== userId) {
            throw new common_1.ForbiddenException("You don't have permission to duplicate this trip");
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
    async generateShareLink(tripId, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: { id: tripId },
        });
        if (!trip || trip.userId !== userId) {
            throw new common_1.ForbiddenException('You do not own this trip');
        }
        const token = (0, crypto_1.randomBytes)(32).toString('hex');
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
    async getSharedTrip(token) {
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
            throw new common_1.NotFoundException('Shared trip not found');
        }
        return trip;
    }
    async updateTrip(tripId, dto, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: { id: tripId },
        });
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        if (trip.userId !== userId) {
            throw new common_1.ForbiddenException('You do not own this trip');
        }
        let totalDays = trip.totalDays;
        const startDate = dto.startDate
            ? new Date(dto.startDate)
            : trip.startDate;
        const endDate = dto.endDate
            ? new Date(dto.endDate)
            : trip.endDate;
        if (startDate && endDate) {
            totalDays =
                Math.ceil((endDate.getTime() -
                    startDate.getTime()) /
                    (1000 * 60 * 60 * 24)) + 1;
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
    async deleteTrip(tripId, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: {
                id: tripId,
            },
        });
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        if (trip.userId !== userId) {
            throw new common_1.ForbiddenException('You do not own this trip');
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
    async updateTripDestination(tripId, stopId, dto, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: {
                id: tripId,
            },
        });
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        if (trip.userId !== userId) {
            throw new common_1.ForbiddenException('You do not own this trip');
        }
        const stop = await this.prisma.tripDestination.findUnique({
            where: {
                id: stopId,
            },
        });
        if (!stop) {
            throw new common_1.NotFoundException('Trip destination not found');
        }
        const arrivalDate = dto.arrivalDate
            ? new Date(dto.arrivalDate)
            : stop.arrivalDate;
        const departureDate = dto.departureDate
            ? new Date(dto.departureDate)
            : stop.departureDate;
        let nights = stop.nights;
        if (arrivalDate && departureDate) {
            nights = Math.ceil((departureDate.getTime() -
                arrivalDate.getTime()) /
                (1000 * 60 * 60 * 24));
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
    async removeTripDestination(tripId, stopId, userId) {
        const trip = await this.prisma.trip.findUnique({
            where: {
                id: tripId,
            },
        });
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        if (trip.userId !== userId) {
            throw new common_1.ForbiddenException('You do not own this trip');
        }
        const stop = await this.prisma.tripDestination.findUnique({
            where: {
                id: stopId,
            },
        });
        if (!stop) {
            throw new common_1.NotFoundException('Trip destination not found');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.tripDestination.delete({
                where: {
                    id: stopId,
                },
            });
            const remainingStops = await tx.tripDestination.findMany({
                where: {
                    tripId,
                },
                orderBy: {
                    visitOrder: 'asc',
                },
            });
            for (let i = 0; i < remainingStops.length; i++) {
                await tx.tripDestination.update({
                    where: {
                        id: remainingStops[i].id,
                    },
                    data: {
                        visitOrder: i + 1,
                    },
                });
            }
        });
        return {
            message: 'Destination removed successfully',
        };
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], TripsService);
//# sourceMappingURL=trips.service.js.map
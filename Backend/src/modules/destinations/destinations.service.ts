import { NotFoundException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { GetDestinationsDto } from './dto/get-destinations.dto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class DestinationsService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly redisService: RedisService,
    ) {}

    private calculateDistance(
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number,
        ): number {

        const R = 6371000;

        const dLat =
            ((lat2 - lat1) * Math.PI) / 180;

        const dLon =
            ((lon2 - lon1) * Math.PI) / 180;

        const a =
            Math.sin(dLat / 2) *
            Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c =
            2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a),
            );

        return R * c;
        }

    async findAll(
    filters: GetDestinationsDto,
    ) {

    const cacheKey =
        `destinations:${JSON.stringify(filters)}`;

    const redis =
        this.redisService.getClient();

    const cached =
        await redis.get(cacheKey);

    if (cached) {

        console.log(
        'DESTINATIONS CACHE HIT',
        );

        return JSON.parse(cached);
    }

    console.log(
        'DESTINATIONS CACHE MISS',
    );

    const destinations =
        await this.prisma.destination.findMany({

        where: {

            isActive: true,

            ...(filters.category && {
            category: filters.category,
            }),

            ...(filters.district && {
            district: filters.district,
            }),

            ...(filters.province && {
            province: filters.province,
            }),

        },

        orderBy: {
            name: 'asc',
        },

        });

    await redis.set(
        cacheKey,
        JSON.stringify(destinations),
        {
        EX: 21600,
        },
    );

    return destinations;
    }

    async findOne(id: string) {

    const destination =
        await this.prisma.destination.findUnique({
        where: {
            id,
        },
        });

    if (!destination) {
        throw new NotFoundException(
        'Destination not found',
        );
    }

    return destination;
    }

    async nearby(
    lat: number,
    lng: number,
    radius: number,
    ) {

    const destinations =
        await this.prisma.destination.findMany({
        where: {
            isActive: true,
        },
        });

    const results = destinations
        .map((destination) => {

        const distance =
            this.calculateDistance(
            lat,
            lng,
            destination.latitude,
            destination.longitude,
            );

        return {
            ...destination,
            distanceMeters:
            Math.round(distance),
        };
        })
        .filter(
        (d) =>
            d.distanceMeters <= radius,
        )
        .sort(
        (a, b) =>
            a.distanceMeters -
            b.distanceMeters,
        );

    return results;
    }
}

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

            ...(filters.categoryID && {
            category: {
                id: filters.categoryID,
            },
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

    async searchDestinations(filters: GetDestinationsDto) {
        
        const redis = this.redisService.getClient();

        const cacheKey =
            `destination-search:${JSON.stringify(filters)}`;

        const cached =
            await redis.get(cacheKey);

        if (cached) {

            console.log(
            'SEARCH CACHE HIT',
            );

            return JSON.parse(cached);
        }

        console.log(
            'SEARCH CACHE MISS',
        );
        
        const {
            q,
            province,
            district,
            categoryID,
            minRating = 0,
            page = 1,
            limit = 10,
        } = filters;

        const data = await this.prisma.destination.findMany({
            where: {
            isActive: true,
            province,
            district,
            rating: {
                gte: minRating,
            },
            ...(categoryID && {
                categories: {
                    some: {
                    categoryId: categoryID,
                    },
                },
                }),
            },

            include: {
                categories: {
                include: {
                    category: true,
                },
                },
            },
        });

        let results = data;

        // 🔍 1. Keyword scoring (IMPORTANT PART)
        if (q) {
            const query = q.toLowerCase();

            results = results
            .map((place) => {
                let score = 0;

                if (place.name.toLowerCase() === query) score += 100;
                if (place.name.toLowerCase().includes(query)) score += 70;
                if (place.district.toLowerCase().includes(query)) score += 30;
                if (place.province.toLowerCase().includes(query)) score += 20;
                if ((place.description || '').toLowerCase().includes(query))
                score += 10;

                return { ...place, score };
            })
            .filter((p) => p.score > 0)
            .sort((a, b) => b.score - a.score);
        }

        // 📄 2. Pagination
        const start = (page - 1) * limit;
        const paginated = results.slice(start, start + limit);

        const response = {
            total: results.length,
            page,
            limit,
            data: paginated,
            };

        await redis.set(
        cacheKey,
        JSON.stringify(response),
        {
            EX: 21600, // 6 hours
        },
        );

        return response;
    }
}

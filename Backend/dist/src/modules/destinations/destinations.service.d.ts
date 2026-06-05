import { PrismaService } from "../../database/prisma/prisma.service";
import { GetDestinationsDto } from './dto/get-destinations.dto';
import { RedisService } from "../../redis/redis.service";
export declare class DestinationsService {
    private readonly prisma;
    private readonly redisService;
    constructor(prisma: PrismaService, redisService: RedisService);
    private calculateDistance;
    findAll(filters: GetDestinationsDto): Promise<any>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        district: string;
        province: string;
        category: import("@prisma/client").$Enums.DestinationCategory;
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        createdAt: Date;
    }>;
    nearby(lat: number, lng: number, radius: number): Promise<{
        distanceMeters: number;
        id: string;
        name: string;
        slug: string;
        district: string;
        province: string;
        category: import("@prisma/client").$Enums.DestinationCategory;
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        createdAt: Date;
    }[]>;
}

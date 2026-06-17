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
        createdAt: Date;
        description: string | null;
        district: string;
        province: string;
        slug: string;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        placeId: string | null;
        address: string | null;
        rating: number | null;
        reviewCount: number | null;
        source: string;
    }>;
    nearby(lat: number, lng: number, radius: number): Promise<{
        distanceMeters: number;
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        district: string;
        province: string;
        slug: string;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        placeId: string | null;
        address: string | null;
        rating: number | null;
        reviewCount: number | null;
        source: string;
    }[]>;
    searchDestinations(filters: GetDestinationsDto): Promise<any>;
}

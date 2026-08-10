import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';
import { RedisService } from "../../redis/redis.service";
export declare class TripsService {
    private prisma;
    private readonly redisService;
    constructor(prisma: PrismaService, redisService: RedisService);
    create(dto: CreateTripDto, user: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isPublic: boolean;
        title: string;
        travelStyleId: string;
        vibeId: string;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        travelerCount: number;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        shareToken: string | null;
    }>;
    findAll(userId: string, filters: any): Promise<any>;
    findOne(tripId: string, userId: string): Promise<import("./responses/trip.response").TripResponse>;
    addDestination(tripId: string, userId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        arrivalDate: Date | null;
        departureDate: Date | null;
        notes: string | null;
        visitOrder: number;
        tripId: string;
        destinationId: string;
        nights: number | null;
    }>;
    reorder(tripId: string, orderedIds: string[], userId: string): Promise<void>;
    duplicateTrip(tripId: string, userId: string): Promise<{
        message: string;
        newTripId: string;
    }>;
    generateShareLink(tripId: string, userId: string): Promise<{
        shareToken: string;
        shareUrl: string;
    }>;
    getSharedTrip(token: string): Promise<{
        tripDestinations: ({
            destination: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            arrivalDate: Date | null;
            departureDate: Date | null;
            notes: string | null;
            visitOrder: number;
            tripId: string;
            destinationId: string;
            nights: number | null;
        })[];
    } & {
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isPublic: boolean;
        title: string;
        travelStyleId: string;
        vibeId: string;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        travelerCount: number;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        shareToken: string | null;
    }>;
    updateTrip(tripId: string, dto: UpdateTripDto, userId: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isPublic: boolean;
        title: string;
        travelStyleId: string;
        vibeId: string;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        travelerCount: number;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        shareToken: string | null;
    }>;
    deleteTrip(tripId: string, userId: string): Promise<{
        message: string;
    }>;
    updateTripDestination(tripId: string, stopId: string, dto: UpdateTripDestinationDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        arrivalDate: Date | null;
        departureDate: Date | null;
        notes: string | null;
        visitOrder: number;
        tripId: string;
        destinationId: string;
        nights: number | null;
    }>;
    removeTripDestination(tripId: string, stopId: string, userId: string): Promise<{
        message: string;
    }>;
}

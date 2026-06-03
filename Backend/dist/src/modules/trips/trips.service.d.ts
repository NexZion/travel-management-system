import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';
export declare class TripsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTripDto, user: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TripStatus;
        travelStyle: import("@prisma/client").$Enums.TravelStyle;
        vibe: import("@prisma/client").$Enums.Vibe;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        isPublic: boolean;
        shareToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    findAll(userId: string, filters: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TripStatus;
        travelStyle: import("@prisma/client").$Enums.TravelStyle;
        vibe: import("@prisma/client").$Enums.Vibe;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        isPublic: boolean;
        shareToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    findOne(tripId: string, userId: string): Promise<({
        tripDestinations: ({
            destination: {
                id: string;
                description: string | null;
                createdAt: Date;
                name: string;
                slug: string;
                district: string;
                province: string;
                category: import("@prisma/client").$Enums.DestinationCategory;
                coverImage: string | null;
                latitude: number;
                longitude: number;
                isActive: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            visitOrder: number;
            tripId: string;
            destinationId: string;
            arrivalDate: Date | null;
            departureDate: Date | null;
            nights: number | null;
            notes: string | null;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TripStatus;
        travelStyle: import("@prisma/client").$Enums.TravelStyle;
        vibe: import("@prisma/client").$Enums.Vibe;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        isPublic: boolean;
        shareToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    addDestination(tripId: string, userId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        visitOrder: number;
        tripId: string;
        destinationId: string;
        arrivalDate: Date | null;
        departureDate: Date | null;
        nights: number | null;
        notes: string | null;
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
                description: string | null;
                createdAt: Date;
                name: string;
                slug: string;
                district: string;
                province: string;
                category: import("@prisma/client").$Enums.DestinationCategory;
                coverImage: string | null;
                latitude: number;
                longitude: number;
                isActive: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            visitOrder: number;
            tripId: string;
            destinationId: string;
            arrivalDate: Date | null;
            departureDate: Date | null;
            nights: number | null;
            notes: string | null;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TripStatus;
        travelStyle: import("@prisma/client").$Enums.TravelStyle;
        vibe: import("@prisma/client").$Enums.Vibe;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        isPublic: boolean;
        shareToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    updateTrip(tripId: string, dto: UpdateTripDto, userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TripStatus;
        travelStyle: import("@prisma/client").$Enums.TravelStyle;
        vibe: import("@prisma/client").$Enums.Vibe;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        isPublic: boolean;
        shareToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    deleteTrip(tripId: string, userId: string): Promise<{
        message: string;
    }>;
    updateTripDestination(tripId: string, stopId: string, dto: UpdateTripDestinationDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        visitOrder: number;
        tripId: string;
        destinationId: string;
        arrivalDate: Date | null;
        departureDate: Date | null;
        nights: number | null;
        notes: string | null;
    }>;
    removeTripDestination(tripId: string, stopId: string, userId: string): Promise<{
        message: string;
    }>;
}

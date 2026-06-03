import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { FilterTripsDto } from './dto/filter-trips.dto';
import { AddTripDestinationDto } from './dto/add-destinations.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';
export declare class TripsController {
    private readonly tripsService;
    constructor(tripsService: TripsService);
    createTrip(dto: CreateTripDto, req: any, user: any): Promise<{
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
    getUserTrips(user: any, filters: FilterTripsDto): Promise<{
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
    getTripById(id: string, user: any): Promise<({
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
    addDestination(tripId: string, dto: AddTripDestinationDto, user: any): Promise<{
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
    reorder(tripId: string, body: {
        orderedIds: string[];
    }, user: any): Promise<void>;
    duplicate(tripId: string, user: any): Promise<{
        message: string;
        newTripId: string;
    }>;
    shareTrip(tripId: string, user: any): Promise<{
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
    updateTrip(tripId: string, dto: UpdateTripDto, user: any): Promise<{
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
    deleteTrip(tripId: string, user: any): Promise<{
        message: string;
    }>;
    updateTripDestination(tripId: string, stopId: string, dto: UpdateTripDestinationDto, user: any): Promise<{
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
    removeTripDestination(tripId: string, stopId: string, user: any): Promise<{
        message: string;
    }>;
}

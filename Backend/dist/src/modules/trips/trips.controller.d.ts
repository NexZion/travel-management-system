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
        isPublic: boolean;
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        title: string;
        description: string | null;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        shareToken: string | null;
        updatedAt: Date;
        travelStyleId: string;
        vibeId: string;
    }>;
    getUserTrips(user: any, filters: FilterTripsDto): Promise<any>;
    getTripById(id: string, user: any): Promise<import("./responses/trip.response").TripResponse>;
    addDestination(tripId: string, dto: AddTripDestinationDto, user: any): Promise<{
        id: string;
        createdAt: Date;
        visitOrder: number;
        arrivalDate: Date | null;
        departureDate: Date | null;
        nights: number | null;
        notes: string | null;
        tripId: string;
        destinationId: string;
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
                name: string;
                createdAt: Date;
                description: string | null;
                slug: string;
                district: string;
                province: string;
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
            visitOrder: number;
            arrivalDate: Date | null;
            departureDate: Date | null;
            nights: number | null;
            notes: string | null;
            tripId: string;
            destinationId: string;
        })[];
    } & {
        isPublic: boolean;
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        title: string;
        description: string | null;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        shareToken: string | null;
        updatedAt: Date;
        travelStyleId: string;
        vibeId: string;
    }>;
    updateTrip(tripId: string, dto: UpdateTripDto, user: any): Promise<{
        isPublic: boolean;
        id: string;
        status: import("@prisma/client").$Enums.TripStatus;
        userId: string;
        createdAt: Date;
        title: string;
        description: string | null;
        budgetRange: import("@prisma/client").$Enums.BudgetRange;
        startDate: Date | null;
        endDate: Date | null;
        totalDays: number | null;
        travelerCount: number;
        shareToken: string | null;
        updatedAt: Date;
        travelStyleId: string;
        vibeId: string;
    }>;
    deleteTrip(tripId: string, user: any): Promise<{
        message: string;
    }>;
    updateTripDestination(tripId: string, stopId: string, dto: UpdateTripDestinationDto, user: any): Promise<{
        id: string;
        createdAt: Date;
        visitOrder: number;
        arrivalDate: Date | null;
        departureDate: Date | null;
        nights: number | null;
        notes: string | null;
        tripId: string;
        destinationId: string;
    }>;
    removeTripDestination(tripId: string, stopId: string, user: any): Promise<{
        message: string;
    }>;
}

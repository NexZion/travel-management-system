import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';
export declare class FilterTripsDto {
    status?: TripStatus;
    travelStyle?: TravelStyle;
    vibe?: Vibe;
    budgetRange?: BudgetRange;
}

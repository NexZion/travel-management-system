import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';
export declare class UpdateTripDto {
    title?: string;
    description?: string;
    status?: TripStatus;
    travelStyle?: TravelStyle;
    vibe?: Vibe;
    budgetRange?: BudgetRange;
    startDate?: string;
    endDate?: string;
    travelerCount?: number;
}

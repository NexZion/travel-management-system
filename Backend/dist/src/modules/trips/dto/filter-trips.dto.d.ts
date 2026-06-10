import { TripStatus, BudgetRange } from '@prisma/client';
export declare class FilterTripsDto {
    status?: TripStatus;
    travelStyleId: string;
    vibeId: string;
    budgetRange?: BudgetRange;
}

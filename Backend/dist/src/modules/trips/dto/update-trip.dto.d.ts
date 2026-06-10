import { TripStatus, BudgetRange } from '@prisma/client';
export declare class UpdateTripDto {
    title?: string;
    description?: string;
    status?: TripStatus;
    travelStyleId?: string;
    vibeId?: string;
    budgetRange?: BudgetRange;
    startDate?: string;
    endDate?: string;
    travelerCount?: number;
}

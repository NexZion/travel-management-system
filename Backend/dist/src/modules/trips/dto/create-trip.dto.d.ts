import { BudgetRange } from '@prisma/client';
export declare class CreateTripDto {
    title: string;
    description?: string;
    travelStyleId: string;
    vibeId: string;
    budgetRange: BudgetRange;
    travelerCount: number;
}

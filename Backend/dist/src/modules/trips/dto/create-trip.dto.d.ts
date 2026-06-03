import { TravelStyle, Vibe, BudgetRange } from '@prisma/client';
export declare class CreateTripDto {
    title: string;
    description?: string;
    travelStyle: TravelStyle;
    vibe: Vibe;
    budgetRange: BudgetRange;
    travelerCount?: number;
}

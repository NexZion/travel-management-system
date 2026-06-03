import { IsString, IsOptional, IsEnum, IsInt } from 'class-validator';
import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';

export class CreateTripDto {

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(TravelStyle)
  travelStyle!: TravelStyle;

  @IsEnum(Vibe)
  vibe!: Vibe;

  @IsEnum(BudgetRange)
  budgetRange!: BudgetRange;

  @IsOptional()
  @IsInt()
  travelerCount?: number;
}
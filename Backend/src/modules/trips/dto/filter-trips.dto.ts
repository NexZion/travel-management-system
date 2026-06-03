import { IsEnum, IsOptional } from 'class-validator';
import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';

export class FilterTripsDto {
  @IsOptional()
  @IsEnum(TripStatus)
  status?: TripStatus;

  @IsOptional()
  @IsEnum(TravelStyle)
  travelStyle?: TravelStyle;

  @IsOptional()
  @IsEnum(Vibe)
  vibe?: Vibe;

  @IsOptional()
  @IsEnum(BudgetRange)
  budgetRange?: BudgetRange;
}
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';

export class FilterTripsDto {
  @IsOptional()
  @IsEnum(TripStatus)
  status?: TripStatus;

  @IsOptional()
  @IsUUID()
  travelStyleId!: string;

  @IsOptional()
  @IsUUID()
  vibeId!: string;

  @IsOptional()
  @IsEnum(BudgetRange)
  budgetRange?: BudgetRange;
}
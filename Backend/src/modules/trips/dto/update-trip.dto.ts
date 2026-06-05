import { IsOptional, IsString, IsInt, Min, IsDateString, IsEnum, } from 'class-validator';
import { TripStatus, TravelStyle, Vibe, BudgetRange, } from '@prisma/client';

export class UpdateTripDto {

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

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

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  travelerCount?: number;
}
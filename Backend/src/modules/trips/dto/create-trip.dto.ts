import { IsString, IsOptional, IsEnum, IsInt, IsUUID, Min } from 'class-validator';
import { TripStatus, TravelStyle, Vibe, BudgetRange } from '@prisma/client';

export class CreateTripDto {

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUUID()
  travelStyleId!: string;

  @IsUUID()
  vibeId!: string;

  @IsEnum(BudgetRange)
  budgetRange!: BudgetRange;

  @IsOptional()
  @IsInt()
  @Min(1)
  travelerCount!: number;
}
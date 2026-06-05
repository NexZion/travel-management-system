import { IsString, IsDateString, IsOptional, IsInt } from 'class-validator';

export class AddTripDestinationDto {
  @IsString()
  destinationId!: string;

  @IsOptional()
  @IsDateString()
  arrivalDate?: string;

  @IsOptional()
  @IsDateString()
  departureDate?: string;

  @IsOptional()
  @IsInt()
  visitOrder?: number;

  @IsOptional()
  notes?: string;
}
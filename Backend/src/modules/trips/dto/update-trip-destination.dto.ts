import {IsOptional, IsDateString, IsString, } from 'class-validator';

export class UpdateTripDestinationDto {

  @IsOptional()
  @IsDateString()
  arrivalDate?: string;

  @IsOptional()
  @IsDateString()
  departureDate?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
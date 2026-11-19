
import {
  IsOptional,
  IsString,
  IsArray,
  IsObject,
  IsDateString,
  MaxLength,
} from 'class-validator';

export class UpdateTravelerProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  bio?: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  homeCity?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsArray()
  travelStyles?: string[];

  @IsOptional()
  @IsArray()
  interests?: string[];

  @IsOptional()
  @IsArray()
  languages?: string[];

  @IsOptional()
  @IsArray()
  dietaryPreferences?: string[];

  @IsOptional()
  @IsString()
  @MaxLength(150)
  emergencyContactName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  emergencyContactPhone?: string;
}

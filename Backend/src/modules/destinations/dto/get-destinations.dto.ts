import { IsOptional, IsString, IsEnum, IsUUID, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

import { DestinationCategory } from '@prisma/client';

export class GetDestinationsDto {

  @IsOptional()
  @IsUUID()
  categoryID?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minRating?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;
}

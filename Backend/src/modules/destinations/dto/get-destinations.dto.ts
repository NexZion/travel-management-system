import { IsOptional, IsString, IsEnum } from 'class-validator';

import { DestinationCategory } from '@prisma/client';

export class GetDestinationsDto {

  @IsOptional()
  @IsEnum(DestinationCategory)
  category?: DestinationCategory;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  province?: string;
}
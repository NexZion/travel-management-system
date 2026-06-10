import { IsOptional, IsString, IsEnum, IsUUID } from 'class-validator';

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
}
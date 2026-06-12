import { IsEnum, IsOptional, IsString, } from 'class-validator';
import { FieldDataType } from '@prisma/client';

export class CreateFieldDto {

  @IsString()
  name!: string;

  @IsString()
  label!: string;

  @IsEnum(FieldDataType)
  dataType!: FieldDataType;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsString()
  helpText?: string;

  @IsOptional()
  @IsString()
  defaultValue?: string;
}
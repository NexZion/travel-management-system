import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

class PackageFieldUpdateDto {
  @IsString()
  fieldId!: string;

  @IsString()
  value!: string;
}

export class UpdateVendorPackageDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  basePrice?: number;

  @IsOptional()
  @IsArray()
  fields?: PackageFieldUpdateDto[];
}

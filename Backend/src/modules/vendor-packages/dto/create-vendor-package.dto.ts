import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

class PackageFieldValueDto {
  @IsString()
  fieldId!: string;

  @IsString()
  value!: string;
}

export class CreateVendorPackageDto {
  @IsString()
  vendorId!: string;

  @IsString()
  packageTypeId!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  basePrice!: number;

  @IsArray()
  fields!: PackageFieldValueDto[];
}

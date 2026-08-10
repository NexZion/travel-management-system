import { IsArray, IsNumber, IsOptional, IsString, Min, ArrayNotEmpty } from 'class-validator';

class PackageFieldValueDto {
  @IsString()
  fieldId!: string;

  @IsString()
  value!: string;
}

export class CreateVendorPackageDto {;
  @IsString()
  packageTypeId!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  basePrice!: number;

  @IsArray()
  @ArrayNotEmpty()
  fields!: PackageFieldValueDto[];
}

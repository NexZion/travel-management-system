import { IsArray, IsBoolean, IsString } from 'class-validator';

class PackageFieldDto {
  @IsString()
  fieldId!: string;

  @IsBoolean()
  isRequired!: boolean;

  displayOrder?: number;
}

export class AssignPackageFieldsDto {
  @IsArray()
  fields!: PackageFieldDto[];
}

import { IsArray, IsBoolean, IsString } from 'class-validator';

class PackageFieldAssign {
  @IsString()
  fieldId!: string;

  @IsBoolean()
  isRequired!: boolean;

  displayOrder?: number;
}

export class AssignPackageFieldsDto {
  @IsArray()
  fields!: PackageFieldAssign[];
}

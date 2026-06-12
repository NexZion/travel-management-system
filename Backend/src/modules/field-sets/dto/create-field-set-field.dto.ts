import { IsBoolean, IsInt, IsString, } from 'class-validator';

export class CreateFieldSetFieldDto {

  @IsString()
  fieldSetId!: string;

  @IsString()
  fieldId!: string;

  @IsInt()
  displayOrder!: number;

  @IsBoolean()
  isRequired?: boolean;

  @IsBoolean()
  readOnly?: boolean;
}
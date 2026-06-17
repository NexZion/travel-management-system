import { IsInt, IsOptional, IsString, } from 'class-validator';
export class CreateFieldOptionDto {

  @IsString()
  fieldId!: string;

  @IsString()
  label!: string;

  @IsString()
  value!: string;

  @IsOptional()
  @IsInt()
  displayOrder?: number;
}
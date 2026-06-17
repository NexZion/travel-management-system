import { IsBoolean, IsOptional, IsString, } from 'class-validator';

export class CreateVendorCategoryDto {

  @IsString()
  name!: string;


  @IsString()
  code!: string;


  @IsOptional()
  @IsString()
  description?: string;


  @IsString()
  fieldSetId!: string;


  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

}
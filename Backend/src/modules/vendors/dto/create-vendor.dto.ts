import { IsArray, IsString, } from 'class-validator';


class VendorFieldDto {

  @IsString()
  fieldId!: string;

  @IsString()
  value!: string;

}

export class CreateVendorDto {

  @IsString()
  categoryId!: string;


  @IsString()
  name!: string;


  @IsString()
  description?: string;


  @IsArray()
  fields!: VendorFieldDto[];

}
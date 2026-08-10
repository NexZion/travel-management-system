import { IsString } from 'class-validator';

export class CreatePackageTypeDto {

  @IsString()
  categoryId!: string;

  @IsString()
  name!: string;

  @IsString()
  description?: string;

}
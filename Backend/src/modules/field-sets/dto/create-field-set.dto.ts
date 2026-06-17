import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFieldSetDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
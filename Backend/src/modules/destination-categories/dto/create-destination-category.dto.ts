import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDestinationCategoryDto {
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
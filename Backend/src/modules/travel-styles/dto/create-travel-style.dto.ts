import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTravelStyleDto {
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
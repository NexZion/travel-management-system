import { IsOptional, IsString, IsEnum, IsNumber, } from 'class-validator';
import { Type } from 'class-transformer';
import { UserStatus } from './update-user-status.dto';

export class GetUsersDto {

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number = 10;

}
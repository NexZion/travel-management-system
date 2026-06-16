import { IsEnum, } from 'class-validator';

export enum UserStatus {

  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DELETED = 'DELETED',

}

export class UpdateUserStatusDto {

  @IsEnum(UserStatus)
  status!: UserStatus;

}
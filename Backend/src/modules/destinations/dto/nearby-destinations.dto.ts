import { IsNumberString, } from 'class-validator';

export class NearbyDestinationDto {

  @IsNumberString()
  lat!: string;

  @IsNumberString()
  lng!: string;

  @IsNumberString()
  radius!: string;
}
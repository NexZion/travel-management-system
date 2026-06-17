import { IsEnum, IsString } from 'class-validator';
import { VendorMediaType } from '@prisma/client';


export class CreateVendorMediaDto {

    @IsEnum(VendorMediaType)
    type!: VendorMediaType;

    @IsString()
    url!: string;

    @IsString()
    fileName!: string;

}
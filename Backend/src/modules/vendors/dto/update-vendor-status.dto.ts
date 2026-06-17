import { IsEnum, IsOptional, IsString } from 'class-validator';
import { VendorStatus } from '@prisma/client';

export class UpdateVendorStatusDto {

    @IsEnum(VendorStatus)
    status!: VendorStatus;

    @IsOptional()
    @IsString()
    reason!: string;

}
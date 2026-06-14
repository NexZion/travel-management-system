import { IsEnum } from 'class-validator';

enum VendorStatus {

    PENDING,
    APPROVED,
    REJECTED,
    SUSPENDED

}

export class UpdateVendorStatusDto {

    @IsEnum(VendorStatus)
    status!:VendorStatus;

}
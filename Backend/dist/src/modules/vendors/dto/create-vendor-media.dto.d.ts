import { VendorMediaType } from '@prisma/client';
export declare class CreateVendorMediaDto {
    type: VendorMediaType;
    url: string;
    fileName: string;
}

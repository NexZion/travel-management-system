import { FieldDataType } from '@prisma/client';
export declare class AddVendorFieldDto {
    name: string;
    label: string;
    dataType: FieldDataType;
    placeholder?: string;
    helpText?: string;
    defaultValue?: string;
}

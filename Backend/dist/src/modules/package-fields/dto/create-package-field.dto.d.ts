import { FieldDataType } from '@prisma/client';
export declare class CreatePackageFieldDto {
    name: string;
    label: string;
    dataType: FieldDataType;
    placeholder?: string;
    helpText?: string;
}

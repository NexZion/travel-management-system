import { FieldDataType } from '@prisma/client';
export declare class CreateFieldDto {
    name: string;
    label: string;
    dataType: FieldDataType;
    placeholder?: string;
    helpText?: string;
    defaultValue?: string;
}

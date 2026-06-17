declare class UpdateVendorFieldDto {
    fieldId: string;
    value: string;
}
export declare class UpdateVendorDto {
    name?: string;
    description?: string;
    fields?: UpdateVendorFieldDto[];
}
export {};

declare class VendorFieldDto {
    fieldId: string;
    value: string;
}
export declare class CreateVendorDto {
    categoryId: string;
    name: string;
    description?: string;
    fields: VendorFieldDto[];
}
export {};

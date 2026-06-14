declare class VendorFieldDto {
    fieldId: string;
    value: string;
}
export declare class CreateVendorDto {
    userId: string;
    categoryId: string;
    name: string;
    description?: string;
    fields: VendorFieldDto[];
}
export {};

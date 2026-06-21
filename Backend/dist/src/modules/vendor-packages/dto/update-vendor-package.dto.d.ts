declare class PackageFieldUpdateDto {
    fieldId: string;
    value: string;
}
export declare class UpdateVendorPackageDto {
    title?: string;
    description?: string;
    basePrice?: number;
    fields?: PackageFieldUpdateDto[];
}
export {};

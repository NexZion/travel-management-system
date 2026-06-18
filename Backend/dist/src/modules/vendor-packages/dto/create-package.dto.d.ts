declare class PackageFieldValueDto {
    fieldId: string;
    value: string;
}
export declare class CreateVendorPackageDto {
    vendorId: string;
    packageTypeId: string;
    title: string;
    description?: string;
    basePrice: number;
    fields: PackageFieldValueDto[];
}
export {};

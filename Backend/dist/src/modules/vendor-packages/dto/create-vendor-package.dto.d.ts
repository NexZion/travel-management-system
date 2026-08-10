declare class PackageFieldValueDto {
    fieldId: string;
    value: string;
}
export declare class CreateVendorPackageDto {
    packageTypeId: string;
    title: string;
    description?: string;
    basePrice: number;
    fields: PackageFieldValueDto[];
}
export {};

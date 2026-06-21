declare class PackageFieldDto {
    fieldId: string;
    isRequired: boolean;
    displayOrder?: number;
}
export declare class AssignPackageFieldsDto {
    fields: PackageFieldDto[];
}
export {};

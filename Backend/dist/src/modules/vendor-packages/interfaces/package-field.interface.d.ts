export interface PackageSchemaField {
    isRequired: boolean;
    packageField: {
        id: string;
        label: string;
        name: string;
        dataType: string;
        options: {
            value: string;
            label: string;
        }[];
    };
}
export interface SubmittedPackageField {
    fieldId: string;
    value: string;
}

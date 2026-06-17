export declare class SearchVendorDto {
    categoryId?: string;
    name?: string;
    fields?: {
        fieldId: string;
        value: string;
    }[];
    page?: number;
    limit?: number;
}

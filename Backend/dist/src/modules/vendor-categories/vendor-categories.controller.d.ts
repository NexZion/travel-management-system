import { VendorCategoriesService } from './vendor-categories.service';
import { CreateVendorCategoryDto } from './dto/create-vendor-category.dto';
export declare class VendorCategoriesController {
    private readonly vendorService;
    constructor(vendorService: VendorCategoriesService);
    create(dto: CreateVendorCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        code: string;
        fieldSetId: string;
    }>;
    findAll(): Promise<({
        fieldSet: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            isCustom: boolean;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        code: string;
        fieldSetId: string;
    })[]>;
    getForm(id: string): Promise<{
        category: string;
        fields: {
            id: string;
            name: string;
            label: string;
            type: import("@prisma/client").$Enums.FieldDataType;
            required: boolean;
            readOnly: boolean;
            options: {
                label: string;
                value: string;
            }[];
        }[];
    }>;
    findOne(id: string): Promise<{
        fieldSet: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            isCustom: boolean;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        code: string;
        fieldSetId: string;
    }>;
}

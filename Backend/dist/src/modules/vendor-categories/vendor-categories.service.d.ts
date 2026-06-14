import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateVendorCategoryDto } from './dto/create-vendor-category.dto';
export declare class VendorCategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: string): Promise<{
        fieldSet: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
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
}

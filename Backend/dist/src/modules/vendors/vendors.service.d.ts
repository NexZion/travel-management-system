import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';
export declare class VendorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateVendorDto, userId: string): Promise<{
        categoryId: string;
        name: string;
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.VendorStatus;
        statusReason: string | null;
        userId: string;
    }>;
    findAll(): Promise<({
        fields: ({
            field: {
                name: string;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            fieldId: string;
            vendorId: string;
            value: string;
        })[];
        category: {
            name: string;
            id: string;
            code: string;
            description: string | null;
            fieldSetId: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        categoryId: string;
        name: string;
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.VendorStatus;
        statusReason: string | null;
        userId: string;
    })[]>;
    findOne(id: string): Promise<{
        fields: {
            fieldId: string;
            name: string;
            label: string;
            dataType: import("@prisma/client").$Enums.FieldDataType;
            value: string;
        }[];
        category: {
            name: string;
            id: string;
            code: string;
            description: string | null;
            fieldSetId: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        categoryId: string;
        name: string;
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.VendorStatus;
        statusReason: string | null;
        userId: string;
    }>;
    updateStatus(id: string, dto: UpdateVendorStatusDto): Promise<{
        categoryId: string;
        name: string;
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.VendorStatus;
        statusReason: string | null;
        userId: string;
    }>;
    update(id: string, dto: UpdateVendorDto): Promise<({
        fields: ({
            field: {
                name: string;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            fieldId: string;
            vendorId: string;
            value: string;
        })[];
    } & {
        categoryId: string;
        name: string;
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.VendorStatus;
        statusReason: string | null;
        userId: string;
    }) | null>;
    search(dto: SearchVendorDto): Promise<{
        data: ({
            fields: ({
                field: {
                    name: string;
                    id: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    label: string;
                    dataType: import("@prisma/client").$Enums.FieldDataType;
                    placeholder: string | null;
                    helpText: string | null;
                    defaultValue: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                fieldId: string;
                vendorId: string;
                value: string;
            })[];
            category: {
                name: string;
                id: string;
                code: string;
                description: string | null;
                fieldSetId: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            categoryId: string;
            name: string;
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.VendorStatus;
            statusReason: string | null;
            userId: string;
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
}

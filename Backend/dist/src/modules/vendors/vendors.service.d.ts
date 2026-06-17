import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';
import { AddVendorFieldDto } from './dto/add-vendor-field.dto';
export declare class VendorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateVendorDto, userId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    }>;
    findAll(): Promise<({
        category: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            fieldSetId: string;
            code: string;
        };
        fields: ({
            field: {
                id: string;
                name: string;
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
            vendorId: string;
            fieldId: string;
            value: string;
        })[];
    } & {
        id: string;
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        category: string;
        fields: ({
            field: {
                options: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    fieldId: string;
                    value: string;
                    label: string;
                    displayOrder: number;
                }[];
            } & {
                id: string;
                name: string;
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
            updatedAt: Date;
            fieldSetId: string;
            fieldId: string;
            displayOrder: number;
            isRequired: boolean;
            readOnly: boolean;
        })[];
        values: ({
            field: {
                id: string;
                name: string;
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
            vendorId: string;
            fieldId: string;
            value: string;
        })[];
    }>;
    updateStatus(id: string, dto: UpdateVendorStatusDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    }>;
    update(id: string, dto: UpdateVendorDto): Promise<({
        fields: ({
            field: {
                id: string;
                name: string;
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
            vendorId: string;
            fieldId: string;
            value: string;
        })[];
    } & {
        id: string;
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    }) | null>;
    search(dto: SearchVendorDto): Promise<{
        data: ({
            category: {
                id: string;
                name: string;
                description: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                fieldSetId: string;
                code: string;
            };
            fields: ({
                field: {
                    id: string;
                    name: string;
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
                vendorId: string;
                fieldId: string;
                value: string;
            })[];
        } & {
            id: string;
            name: string;
            description: string | null;
            status: import("@prisma/client").$Enums.VendorStatus;
            isActive: boolean;
            statusReason: string | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            categoryId: string;
            fieldSetId: string | null;
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
    addCustomField(vendorId: string, dto: AddVendorFieldDto): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        label: string;
        dataType: import("@prisma/client").$Enums.FieldDataType;
        placeholder: string | null;
        helpText: string | null;
        defaultValue: string | null;
    }>;
}

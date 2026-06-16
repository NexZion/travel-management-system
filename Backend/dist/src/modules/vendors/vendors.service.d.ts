import { PrismaService } from "../../database/prisma/prisma.service";
import { VendorStatus } from '@prisma/client';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateVendorDto, userId: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.VendorStatus;
        name: string;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            full_name: string;
            email: string;
        };
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            code: string;
            fieldSetId: string;
        };
        fields: ({
            field: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                isActive: boolean;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            value: string;
            fieldId: string;
            vendorId: string;
        })[];
    } & {
        id: string;
        status: import("@prisma/client").$Enums.VendorStatus;
        name: string;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            full_name: string;
            email: string;
        };
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            code: string;
            fieldSetId: string;
        };
        fields: ({
            field: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                isActive: boolean;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            value: string;
            fieldId: string;
            vendorId: string;
        })[];
    } & {
        id: string;
        status: import("@prisma/client").$Enums.VendorStatus;
        name: string;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
    updateStatus(id: string, status: VendorStatus): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.VendorStatus;
        name: string;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
    update(id: string, dto: UpdateVendorDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.VendorStatus;
        name: string;
        userId: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
}

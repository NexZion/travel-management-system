import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    create(dto: CreateVendorDto, user: any): Promise<{
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
    }>;
    findAll(): Promise<({
        category: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            fieldSetId: string;
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
    })[]>;
    search(dto: SearchVendorDto): Promise<{
        data: ({
            category: {
                id: string;
                name: string;
                description: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                code: string;
                fieldSetId: string;
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
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
    findOne(id: string): Promise<{
        fields: {
            fieldId: string;
            name: string;
            label: string;
            dataType: import("@prisma/client").$Enums.FieldDataType;
            value: string;
        }[];
        category: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            fieldSetId: string;
        };
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
    }) | null>;
}

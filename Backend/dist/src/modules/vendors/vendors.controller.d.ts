import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    create(dto: CreateVendorDto, user: any): Promise<{
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
    updateStatus(id: string, dto: UpdateVendorStatusDto): Promise<{
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

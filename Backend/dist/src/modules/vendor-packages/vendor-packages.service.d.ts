import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
import { UpdateVendorPackageDto } from './dto/update-vendor-package.dto';
export declare class VendorPackagesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateVendorPackageDto, userId: string): Promise<({
        packageType: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            categoryId: string;
        };
        fieldValues: ({
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
            value: string;
            fieldId: string;
            packageId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        title: string;
        isActive: boolean;
        vendorId: string;
        packageTypeId: string;
        basePrice: number;
    }) | null>;
    findOne(id: string): Promise<{
        vendor: {
            id: string;
            status: import("@prisma/client").$Enums.VendorStatus;
            name: string;
            userId: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            reviewCount: number;
            categoryId: string;
            fieldSetId: string | null;
            statusReason: string | null;
            averageRating: number;
        };
        packageType: {
            fieldSet: ({
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
                    fieldSetId: string;
                    displayOrder: number;
                    fieldId: string;
                    isRequired: boolean;
                })[];
            } & {
                id: string;
                packageTypeId: string;
            }) | null;
        } & {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            categoryId: string;
        };
        fieldValues: ({
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
            value: string;
            fieldId: string;
            packageId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        title: string;
        isActive: boolean;
        vendorId: string;
        packageTypeId: string;
        basePrice: number;
    }>;
    findByVendor(userId: string): Promise<({
        packageType: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
            updatedAt: Date;
            isActive: boolean;
            categoryId: string;
        };
        fieldValues: ({
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
            value: string;
            fieldId: string;
            packageId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        title: string;
        isActive: boolean;
        vendorId: string;
        packageTypeId: string;
        basePrice: number;
    })[]>;
    update(id: string, userId: string, dto: UpdateVendorPackageDto): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        title: string;
        isActive: boolean;
        vendorId: string;
        packageTypeId: string;
        basePrice: number;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        title: string;
        isActive: boolean;
        vendorId: string;
        packageTypeId: string;
        basePrice: number;
    }>;
}

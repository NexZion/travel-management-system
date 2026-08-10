import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { VendorPackagesService } from './vendor-packages.service';
import { UpdateVendorPackageDto } from './dto/update-vendor-package.dto';
export declare class VendorPackagesController {
    private readonly service;
    constructor(service: VendorPackagesService);
    create(dto: CreateVendorPackageDto, user: any): Promise<({
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
    findByVendor(vendorId: string): Promise<({
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
    findMyPackages(req: any): Promise<({
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
    update(id: string, dto: UpdateVendorPackageDto, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
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

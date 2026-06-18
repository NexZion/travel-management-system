import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { VendorPackagesService } from './vendor-packages.service';
export declare class VendorPackagesController {
    private readonly service;
    constructor(service: VendorPackagesService);
    create(dto: CreateVendorPackageDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        basePrice: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        vendorId: string;
        packageTypeId: string;
    }>;
    findByVendor(vendorId: string): Promise<({
        packageType: {
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            categoryId: string;
        };
        fieldValues: ({
            field: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            packageId: string;
            fieldId: string;
            value: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        basePrice: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        vendorId: string;
        packageTypeId: string;
    })[]>;
    findOne(id: string): Promise<({
        vendor: {
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            categoryId: string;
            userId: string;
            fieldSetId: string | null;
            status: import("@prisma/client").$Enums.VendorStatus;
            statusReason: string | null;
            reviewCount: number;
            averageRating: number;
        };
        packageType: {
            fieldSet: ({
                fields: ({
                    field: {
                        id: string;
                        isActive: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        label: string;
                        dataType: import("@prisma/client").$Enums.FieldDataType;
                        placeholder: string | null;
                        helpText: string | null;
                        defaultValue: string | null;
                    };
                } & {
                    id: string;
                    fieldId: string;
                    fieldSetId: string;
                    isRequired: boolean;
                    displayOrder: number;
                })[];
            } & {
                id: string;
                packageTypeId: string;
            }) | null;
        } & {
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            categoryId: string;
        };
        fieldValues: ({
            field: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                label: string;
                dataType: import("@prisma/client").$Enums.FieldDataType;
                placeholder: string | null;
                helpText: string | null;
                defaultValue: string | null;
            };
        } & {
            id: string;
            packageId: string;
            fieldId: string;
            value: string;
        })[];
    } & {
        id: string;
        title: string;
        description: string | null;
        basePrice: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        vendorId: string;
        packageTypeId: string;
    }) | null>;
}

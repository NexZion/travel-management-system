import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
export declare class VendorPackagesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: string): Promise<({
        vendor: {
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: string;
            categoryId: string;
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
                    fieldSetId: string;
                    fieldId: string;
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
            fieldId: string;
            packageId: string;
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
            fieldId: string;
            packageId: string;
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
}

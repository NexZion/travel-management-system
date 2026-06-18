import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';
import { AddVendorFieldDto } from './dto/add-vendor-field.dto';
import { UpdateVendorFieldDto } from './dto/update-vendor-field.dto';
import { CreateVendorMediaDto } from './dto/create-vendor-media.dto';
import { CreateReviewDto } from './dto/create-review.dto';
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
        reviewCount: number;
        categoryId: string;
        fieldSetId: string | null;
        statusReason: string | null;
        averageRating: number;
    }>;
    findAll(): Promise<({
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
            fieldId: string;
            value: string;
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
        reviewCount: number;
        categoryId: string;
        fieldSetId: string | null;
        statusReason: string | null;
        averageRating: number;
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
                    displayOrder: number;
                    fieldId: string;
                    label: string;
                    value: string;
                }[];
            } & {
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
            updatedAt: Date;
            fieldSetId: string;
            displayOrder: number;
            fieldId: string;
            isRequired: boolean;
            readOnly: boolean;
        })[];
        values: ({
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
            fieldId: string;
            value: string;
            vendorId: string;
        })[];
    }>;
    updateStatus(id: string, dto: UpdateVendorStatusDto, adminId: string): Promise<{
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
    }>;
    getStatusHistory(id: string): Promise<{
        id: string;
        reason: string | null;
        vendorId: string;
        previousStatus: import("@prisma/client").$Enums.VendorStatus | null;
        newStatus: import("@prisma/client").$Enums.VendorStatus;
        changedBy: string;
        changedAt: Date;
    }[]>;
    update(id: string, dto: UpdateVendorDto): Promise<({
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
            fieldId: string;
            value: string;
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
        reviewCount: number;
        categoryId: string;
        fieldSetId: string | null;
        statusReason: string | null;
        averageRating: number;
    }) | null>;
    search(dto: SearchVendorDto): Promise<{
        data: ({
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
                fieldId: string;
                value: string;
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
            reviewCount: number;
            categoryId: string;
            fieldSetId: string | null;
            statusReason: string | null;
            averageRating: number;
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
    addCustomField(vendorId: string, dto: AddVendorFieldDto): Promise<{
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
    }>;
    updateCustomField(vendorId: string, fieldId: string, dto: UpdateVendorFieldDto): Promise<{
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
    }>;
    deleteCustomField(vendorId: string, fieldId: string): Promise<{
        message: string;
    }>;
    updateFieldOrder(vendorId: string, fieldId: string, order: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fieldSetId: string;
        displayOrder: number;
        fieldId: string;
        isRequired: boolean;
        readOnly: boolean;
    }>;
    addMedia(vendorId: string, dto: CreateVendorMediaDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        url: string;
        type: import("@prisma/client").$Enums.VendorMediaType;
        fileName: string | null;
        vendorId: string;
    }>;
    deleteMedia(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        url: string;
        type: import("@prisma/client").$Enums.VendorMediaType;
        fileName: string | null;
        vendorId: string;
    }>;
    createReview(vendorId: string, userId: string, dto: CreateReviewDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        vendorId: string;
        comment: string | null;
    }>;
    getReviews(vendorId: string): Promise<({
        user: {
            id: string;
            full_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        vendorId: string;
        comment: string | null;
    })[]>;
}

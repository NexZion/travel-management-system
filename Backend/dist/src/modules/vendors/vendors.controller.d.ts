import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';
import { AddVendorFieldDto } from './dto/add-vendor-field.dto';
import { UpdateVendorFieldDto } from './dto/update-vendor-field.dto';
import { UpdateFieldOrderDto } from './dto/update-field-order.dto';
import { CreateVendorMediaDto } from './dto/create-vendor-media.dto';
import { CreateReviewDto } from './dto/create-review.dto';
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
        reviewCount: number;
        categoryId: string;
        fieldSetId: string | null;
        statusReason: string | null;
        averageRating: number;
    })[]>;
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
                    value: string;
                    displayOrder: number;
                    fieldId: string;
                    label: string;
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
            value: string;
            fieldId: string;
            vendorId: string;
        })[];
    }>;
    updateStatus(id: string, dto: UpdateVendorStatusDto, user: any): Promise<{
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
        reviewCount: number;
        categoryId: string;
        fieldSetId: string | null;
        statusReason: string | null;
        averageRating: number;
    }) | null>;
    addCustomField(id: string, dto: AddVendorFieldDto): Promise<{
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
    updateFieldOrder(vendorId: string, fieldId: string, dto: UpdateFieldOrderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fieldSetId: string;
        displayOrder: number;
        fieldId: string;
        isRequired: boolean;
        readOnly: boolean;
    }>;
    addMedia(id: string, dto: CreateVendorMediaDto): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.VendorMediaType;
        isActive: boolean;
        fileName: string | null;
        vendorId: string;
    }>;
    deleteMedia(mediaId: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.VendorMediaType;
        isActive: boolean;
        fileName: string | null;
        vendorId: string;
    }>;
    createReview(id: string, user: any, dto: CreateReviewDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        comment: string | null;
        vendorId: string;
    }>;
    getReviews(id: string): Promise<({
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
        comment: string | null;
        vendorId: string;
    })[]>;
}

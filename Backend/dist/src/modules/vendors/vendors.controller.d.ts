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
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        reviewCount: number;
        averageRating: number;
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
        reviewCount: number;
        averageRating: number;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
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
            reviewCount: number;
            averageRating: number;
            userId: string;
            categoryId: string;
            fieldSetId: string | null;
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
    updateStatus(id: string, dto: UpdateVendorStatusDto, user: any): Promise<{
        id: string;
        name: string;
        description: string | null;
        status: import("@prisma/client").$Enums.VendorStatus;
        isActive: boolean;
        statusReason: string | null;
        createdAt: Date;
        updatedAt: Date;
        reviewCount: number;
        averageRating: number;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    }>;
    getStatusHistory(id: string): Promise<{
        id: string;
        vendorId: string;
        previousStatus: import("@prisma/client").$Enums.VendorStatus | null;
        newStatus: import("@prisma/client").$Enums.VendorStatus;
        reason: string | null;
        changedBy: string;
        changedAt: Date;
    }[]>;
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
        reviewCount: number;
        averageRating: number;
        userId: string;
        categoryId: string;
        fieldSetId: string | null;
    }) | null>;
    addCustomField(id: string, dto: AddVendorFieldDto): Promise<{
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
    updateCustomField(vendorId: string, fieldId: string, dto: UpdateVendorFieldDto): Promise<{
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
    deleteCustomField(vendorId: string, fieldId: string): Promise<{
        message: string;
    }>;
    updateFieldOrder(vendorId: string, fieldId: string, dto: UpdateFieldOrderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fieldSetId: string;
        fieldId: string;
        displayOrder: number;
        isRequired: boolean;
        readOnly: boolean;
    }>;
    addMedia(id: string, dto: CreateVendorMediaDto): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        vendorId: string;
        type: import("@prisma/client").$Enums.VendorMediaType;
        url: string;
        fileName: string | null;
    }>;
    deleteMedia(mediaId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        vendorId: string;
        type: import("@prisma/client").$Enums.VendorMediaType;
        url: string;
        fileName: string | null;
    }>;
    createReview(id: string, user: any, dto: CreateReviewDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        vendorId: string;
        rating: number;
        comment: string | null;
    }>;
    getReviews(id: string): Promise<({
        user: {
            id: string;
            full_name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        vendorId: string;
        rating: number;
        comment: string | null;
    })[]>;
}

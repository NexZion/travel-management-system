import { PackageTypesService } from './package-types.service';
import { CreatePackageTypeDto } from './dto/create-package-types.dto';
export declare class PackageTypesController {
    private readonly service;
    constructor(service: PackageTypesService);
    create(dto: CreatePackageTypeDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
    findByCategory(id: string): Promise<({
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
    })[]>;
    findOne(id: string): Promise<{
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
    }>;
}

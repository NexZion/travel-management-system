import { CreatePackageTypeDto } from './dto/create-package-types.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
import { AssignPackageFieldsDto } from './dto/assign-fields.dto';
export declare class PackageTypesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePackageTypeDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
        categoryId: string;
    }>;
    findByCategory(categoryId: string): Promise<({
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
    assignFields(packageTypeId: string, dto: AssignPackageFieldsDto): Promise<({
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
    }) | null>;
}

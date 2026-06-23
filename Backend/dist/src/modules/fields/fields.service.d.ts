import { CreateFieldDto } from './dto/create-field.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateFieldOptionDto } from './dto/create-field-option.dto';
export declare class FieldsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateFieldDto): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    } | null>;
    createOption(dto: CreateFieldOptionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
        displayOrder: number;
        fieldId: string;
        label: string;
    }>;
}

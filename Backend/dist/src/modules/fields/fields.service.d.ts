import { CreateFieldDto } from './dto/create-field.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateFieldOptionDto } from './dto/create-field-option.dto';
export declare class FieldsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateFieldDto): Promise<{
        id: string;
        name: string;
        label: string;
        dataType: import("@prisma/client").$Enums.FieldDataType;
        placeholder: string | null;
        helpText: string | null;
        defaultValue: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        label: string;
        dataType: import("@prisma/client").$Enums.FieldDataType;
        placeholder: string | null;
        helpText: string | null;
        defaultValue: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        label: string;
        dataType: import("@prisma/client").$Enums.FieldDataType;
        placeholder: string | null;
        helpText: string | null;
        defaultValue: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createOption(dto: CreateFieldOptionDto): Promise<{
        id: string;
        label: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
        displayOrder: number;
        fieldId: string;
    }>;
}

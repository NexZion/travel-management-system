import { CreateFieldDto } from './dto/create-field.dto';
import { FieldsService } from './fields.service';
import { CreateFieldOptionDto } from './dto/create-field-option.dto';
export declare class FieldsController {
    private readonly fieldsService;
    constructor(fieldsService: FieldsService);
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
        displayOrder: number;
        fieldId: string;
        label: string;
        value: string;
    }>;
}

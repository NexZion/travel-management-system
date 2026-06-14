import { CreateFieldSetDto } from './dto/create-field-set.dto';
import { FieldSetsService } from './field-sets.service';
import { CreateFieldSetFieldDto } from './dto/create-field-set-field.dto';
export declare class FieldSetsController {
    private readonly fieldSetsService;
    constructor(fieldSetsService: FieldSetsService);
    create(dto: CreateFieldSetDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
        isActive: boolean;
    } | null>;
    attachField(dto: CreateFieldSetFieldDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fieldSetId: string;
        displayOrder: number;
        fieldId: string;
        isRequired: boolean;
        readOnly: boolean;
    }>;
    getForm(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        fields: {
            id: string;
            name: string;
            label: string;
            dataType: import("@prisma/client").$Enums.FieldDataType;
            isRequired: boolean;
            readOnly: boolean;
            options: {
                label: string;
                value: string;
            }[];
        }[];
    }>;
}

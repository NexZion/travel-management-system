import { CreateFieldSetDto } from './dto/create-field-set.dto';
import { FieldSetsService } from './field-sets.service';
import { CreateFieldSetFieldDto } from './dto/create-field-set-field.dto';
export declare class FieldSetsController {
    private readonly fieldSetsService;
    constructor(fieldSetsService: FieldSetsService);
    create(dto: CreateFieldSetDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    attachField(dto: CreateFieldSetFieldDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayOrder: number;
        isRequired: boolean;
        readOnly: boolean;
        fieldSetId: string;
        fieldId: string;
    }>;
}

import { PackageFieldsService } from './package-fields.service';
import { CreatePackageFieldDto } from './dto/create-package-field.dto';
import { AssignPackageFieldsDto } from './dto/assign-package-field.dto';
export declare class PackageFieldsController {
    private service;
    constructor(service: PackageFieldsService);
    create(dto: CreatePackageFieldDto): Promise<{
        name: string;
        label: string;
        dataType: import("@prisma/client").$Enums.FieldDataType;
        placeholder: string | null;
        helpText: string | null;
        id: string;
        defaultValue: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    assignFields(id: string, dto: AssignPackageFieldsDto): Promise<{
        id: string;
        packageTypeId: string;
    }>;
}

import { PrismaService } from "../../database/prisma/prisma.service";
import { CreatePackageFieldDto } from './dto/create-package-field.dto';
import { AssignPackageFieldsDto } from './dto/assign-package-field.dto';
export declare class PackageFieldsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    assignFields(packageTypeId: string, dto: AssignPackageFieldsDto): Promise<{
        id: string;
        packageTypeId: string;
    }>;
}

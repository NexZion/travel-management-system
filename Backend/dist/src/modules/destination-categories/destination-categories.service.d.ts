import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateDestinationCategoryDto } from './dto/create-destination-category.dto';
import { UpdateDestinationCategoryDto } from './dto/update-destination-category.dto';
export declare class DestinationCategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDestinationCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateDestinationCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
}

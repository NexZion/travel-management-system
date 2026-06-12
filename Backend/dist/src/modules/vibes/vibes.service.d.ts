import { PrismaService } from "../../database/prisma/prisma.service";
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';
export declare class VibesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateVibeDto): Promise<{
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
    update(id: string, dto: UpdateVibeDto): Promise<{
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

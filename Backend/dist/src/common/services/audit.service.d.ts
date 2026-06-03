import { PrismaService } from "../../database/prisma/prisma.service";
export declare class AuditService {
    private prisma;
    constructor(prisma: PrismaService);
    log(data: {
        action: string;
        userId?: string;
        ipAddress?: string;
        userAgent?: string;
        metadata?: any;
    }): Promise<{
        id: string;
        action: string;
        userId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
    }>;
}

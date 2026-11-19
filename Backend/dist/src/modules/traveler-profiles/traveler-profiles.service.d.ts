import { PrismaService } from "../../database/prisma/prisma.service";
import { UpdateTravelerProfileDto } from './dto/update-traveler-profile.dto';
export declare class TravelerProfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getMyProfile(userId: string): Promise<{
        id: string;
        phone: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        homeCity: string | null;
        travelStyles: import("@prisma/client/runtime/client").JsonValue | null;
        interests: import("@prisma/client/runtime/client").JsonValue | null;
        languages: import("@prisma/client/runtime/client").JsonValue | null;
        dietaryPreferences: import("@prisma/client/runtime/client").JsonValue | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        onboardingCompletedAt: Date | null;
    } | null>;
    updateMyProfile(userId: string, dto: UpdateTravelerProfileDto): Promise<{
        id: string;
        phone: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        homeCity: string | null;
        travelStyles: import("@prisma/client/runtime/client").JsonValue | null;
        interests: import("@prisma/client/runtime/client").JsonValue | null;
        languages: import("@prisma/client/runtime/client").JsonValue | null;
        dietaryPreferences: import("@prisma/client/runtime/client").JsonValue | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        onboardingCompletedAt: Date | null;
    }>;
    completeOnboarding(userId: string): Promise<{
        id: string;
        phone: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        homeCity: string | null;
        travelStyles: import("@prisma/client/runtime/client").JsonValue | null;
        interests: import("@prisma/client/runtime/client").JsonValue | null;
        languages: import("@prisma/client/runtime/client").JsonValue | null;
        dietaryPreferences: import("@prisma/client/runtime/client").JsonValue | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        onboardingCompletedAt: Date | null;
    }>;
}

import { TravelerProfilesService } from './traveler-profiles.service';
import { UpdateTravelerProfileDto } from './dto/update-traveler-profile.dto';
export declare class TravelerProfilesController {
    private readonly travelerProfilesService;
    constructor(travelerProfilesService: TravelerProfilesService);
    getMyProfile(user: any): Promise<{
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
    updateMyProfile(user: any, dto: UpdateTravelerProfileDto): Promise<{
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
    completeOnboarding(user: any): Promise<{
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

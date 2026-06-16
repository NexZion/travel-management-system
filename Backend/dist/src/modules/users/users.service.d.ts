import { PrismaService } from "../../database/prisma/prisma.service";
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UserStatus } from './dto/update-user-status.dto';
import { GetUsersDto } from './dto/get-users.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        status: import("@prisma/client").$Enums.UserStatus;
        id: string;
        email: string;
        phone: string;
        full_name: string;
        avatar: string | null;
        is_verified: boolean;
        created_at: Date;
    } | null>;
    updateProfile(userId: string, dto: UpdateProfileDto): Promise<{
        id: string;
        email: string;
        phone: string;
        full_name: string;
        avatar: string | null;
    }>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        id: string;
        email: string;
        full_name: string;
    }>;
    updateStatus(id: string, status: UserStatus): Promise<{
        status: import("@prisma/client").$Enums.UserStatus;
        id: string;
        email: string;
        full_name: string;
    }>;
    findAll(filters: GetUsersDto): Promise<{
        data: ({
            roles: ({
                role: {
                    id: string;
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                createdAt: Date;
                userId: string;
                roleId: string;
            })[];
        } & {
            status: import("@prisma/client").$Enums.UserStatus;
            id: string;
            email: string;
            phone: string;
            full_name: string;
            password: string;
            avatar: string | null;
            is_verified: boolean;
            created_at: Date;
            updated_at: Date;
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
}

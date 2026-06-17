import { PrismaService } from "../../database/prisma/prisma.service";
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UserStatus } from './dto/update-user-status.dto';
import { GetUsersDto } from './dto/get-users.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        id: string;
        full_name: string;
        email: string;
        phone: string;
        avatar: string | null;
        is_verified: boolean;
        status: import("@prisma/client").$Enums.UserStatus;
        created_at: Date;
    } | null>;
    updateProfile(userId: string, dto: UpdateProfileDto): Promise<{
        id: string;
        full_name: string;
        email: string;
        phone: string;
        avatar: string | null;
    }>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        id: string;
        full_name: string;
        email: string;
    }>;
    updateStatus(id: string, status: UserStatus): Promise<{
        id: string;
        full_name: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    findAll(filters: GetUsersDto): Promise<{
        data: ({
            roles: ({
                role: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    description: string | null;
                    updatedAt: Date;
                };
            } & {
                id: string;
                userId: string;
                createdAt: Date;
                roleId: string;
            })[];
        } & {
            id: string;
            full_name: string;
            email: string;
            phone: string;
            password: string;
            avatar: string | null;
            is_verified: boolean;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
        })[];
        page: number;
        limit: number;
        total: number;
    }>;
}

import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { GetUsersDto } from './dto/get-users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(user: any): Promise<{
        id: string;
        full_name: string;
        email: string;
        phone: string;
        avatar: string | null;
        is_verified: boolean;
        status: import("@prisma/client").$Enums.UserStatus;
        created_at: Date;
    } | null>;
    updateProfile(user: any, dto: UpdateProfileDto): Promise<{
        id: string;
        full_name: string;
        email: string;
        phone: string;
        avatar: string | null;
    }>;
    changePassword(user: any, dto: ChangePasswordDto): Promise<{
        id: string;
        full_name: string;
        email: string;
    }>;
    updateStatus(id: string, dto: UpdateUserStatusDto): Promise<{
        id: string;
        full_name: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    getAllUsers(query: GetUsersDto): Promise<{
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

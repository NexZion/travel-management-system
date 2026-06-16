import { UserStatus } from './update-user-status.dto';
export declare class GetUsersDto {
    search?: string;
    role?: string;
    status?: UserStatus;
    page?: number;
    limit?: number;
}

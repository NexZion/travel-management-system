export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
export declare class UpdateUserStatusDto {
    status: UserStatus;
}

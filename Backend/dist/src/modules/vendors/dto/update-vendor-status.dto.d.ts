declare enum VendorStatus {
    PENDING = 0,
    APPROVED = 1,
    REJECTED = 2,
    SUSPENDED = 3
}
export declare class UpdateVendorStatusDto {
    status: VendorStatus;
}
export {};

import { DestinationCategory } from '@prisma/client';
export declare class GetDestinationsDto {
    category?: DestinationCategory;
    district?: string;
    province?: string;
}

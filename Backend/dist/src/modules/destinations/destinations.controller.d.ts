import { GetDestinationsDto } from './dto/get-destinations.dto';
import { DestinationsService } from './destinations.service';
import { NearbyDestinationDto } from './dto/nearby-destinations.dto';
export declare class DestinationsController {
    private readonly destinationsService;
    constructor(destinationsService: DestinationsService);
    findAll(filters: GetDestinationsDto): Promise<any>;
    findNearby(query: NearbyDestinationDto): Promise<{
        distanceMeters: number;
        id: string;
        name: string;
        slug: string;
        district: string;
        province: string;
        category: import("@prisma/client").$Enums.DestinationCategory;
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        district: string;
        province: string;
        category: import("@prisma/client").$Enums.DestinationCategory;
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        createdAt: Date;
    }>;
}

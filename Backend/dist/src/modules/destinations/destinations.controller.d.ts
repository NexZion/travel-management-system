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
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        placeId: string | null;
        address: string | null;
        rating: number | null;
        reviewCount: number | null;
        source: string;
        createdAt: Date;
    }[]>;
    search(filters: GetDestinationsDto): Promise<any>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        district: string;
        province: string;
        description: string | null;
        coverImage: string | null;
        latitude: number;
        longitude: number;
        isActive: boolean;
        placeId: string | null;
        address: string | null;
        rating: number | null;
        reviewCount: number | null;
        source: string;
        createdAt: Date;
    }>;
}

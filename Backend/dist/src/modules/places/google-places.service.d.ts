import { PrismaService } from "../../database/prisma/prisma.service";
export declare class GooglePlacesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private loadMockData;
    searchPlaces(query: string): Promise<any>;
    getPlaceById(placeId: string): Promise<any>;
    importPlaces(): Promise<{
        message: string;
    }>;
}

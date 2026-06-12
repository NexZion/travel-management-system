import { GooglePlacesService } from './google-places.service';
export declare class GooglePlacesController {
    private readonly placesService;
    constructor(placesService: GooglePlacesService);
    search(q: string): Promise<any>;
    getOne(id: string): Promise<any>;
    importPlaces(): Promise<{
        message: string;
    }>;
}

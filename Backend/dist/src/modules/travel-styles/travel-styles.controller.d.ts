import { TravelStylesService } from './travel-styles.service';
import { CreateTravelStyleDto } from './dto/create-travel-style.dto';
import { UpdateTravelStyleDto } from './dto/update-travel-style.dto';
export declare class TravelStylesController {
    private readonly travelStylesService;
    constructor(travelStylesService: TravelStylesService);
    create(dto: CreateTravelStyleDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateTravelStyleDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
        updatedAt: Date;
    }>;
}

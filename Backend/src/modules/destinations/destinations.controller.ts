import { Controller, Get, Query, Param } from '@nestjs/common';
import { GetDestinationsDto } from './dto/get-destinations.dto';
import { DestinationsService } from './destinations.service';
import { NearbyDestinationDto } from './dto/nearby-destinations.dto';

@Controller('destinations')
export class DestinationsController {

    constructor(private readonly destinationsService: DestinationsService) {}

    @Get()
    findAll(
    @Query() filters: GetDestinationsDto,
    ) {
    return this.destinationsService.findAll(
        filters,
    );
    }

    @Get('nearby')
    findNearby(
    @Query() query: NearbyDestinationDto,
    ) {

    return this.destinationsService.nearby(
        Number(query.lat),
        Number(query.lng),
        Number(query.radius),
    );
    }

    @Get('search')
    search(@Query() filters: GetDestinationsDto) {
    return this.destinationsService.searchDestinations(filters);
    }

    @Get(':id')
    findOne(
    @Param('id') id: string,
    ) {
    return this.destinationsService.findOne(
        id,
    );
    }

    
}

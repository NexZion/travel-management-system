import { Controller, Get, Query, Param, Post } from '@nestjs/common';
import { GooglePlacesService } from './google-places.service';

@Controller('places')
export class GooglePlacesController {
  constructor(private readonly placesService: GooglePlacesService) {}

  @Get('search')
  search(@Query('q') q: string) {
    return this.placesService.searchPlaces(q);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.placesService.getPlaceById(id);
  }

  @Post('import')
  async importPlaces() {
    return this.placesService.importPlaces();
  }
}
import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { TravelStylesService } from './travel-styles.service';
import { CreateTravelStyleDto } from './dto/create-travel-style.dto';
import { UpdateTravelStyleDto } from './dto/update-travel-style.dto';

@Controller('travel-styles')
export class TravelStylesController {
  constructor(
    private readonly travelStylesService: TravelStylesService,
  ) {}

  @Post()
  create(
    @Body()
    dto: CreateTravelStyleDto,
  ) {
    return this.travelStylesService.create(dto);
  }

  @Get()
  findAll() {
    return this.travelStylesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.travelStylesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id')
    id: string,

    @Body()
    dto: UpdateTravelStyleDto,
  ) {
    return this.travelStylesService.update(
      id,
      dto,
    );
  }

  @Delete(':id')
  remove(
    @Param('id')
    id: string,
  ) {
    return this.travelStylesService.remove(id);
  }
}
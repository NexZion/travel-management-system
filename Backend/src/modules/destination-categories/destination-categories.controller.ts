import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { DestinationCategoriesService } from './destination-categories.service';
import { CreateDestinationCategoryDto } from './dto/create-destination-category.dto';
import { UpdateDestinationCategoryDto } from './dto/update-destination-category.dto';

@Controller('destination-categories')
export class DestinationCategoriesController {
  constructor(
    private readonly destinationCategoriesService: DestinationCategoriesService,
  ) {}

  @Post()
  create(
    @Body()
    dto: CreateDestinationCategoryDto,
  ) {
    return this.destinationCategoriesService.create(dto);
  }

  @Get()
  findAll() {
    return this.destinationCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinationCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDestinationCategoryDto,
  ) {
    return this.destinationCategoriesService.update(
      id,
      dto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationCategoriesService.remove(id);
  }
}
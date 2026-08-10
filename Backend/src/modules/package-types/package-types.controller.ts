import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { PackageTypesService } from './package-types.service';
import { CreatePackageTypeDto } from './dto/create-package-types.dto';
import { AssignPackageFieldsDto } from './dto/assign-fields.dto';

@Controller('package-types')
export class PackageTypesController {
  constructor(private readonly service: PackageTypesService) {}

  @Post()
  create(@Body() dto: CreatePackageTypeDto) {
    return this.service.create(dto);
  }

  @Get('category/:id')
  findByCategory(@Param('id') id: string) {
    return this.service.findByCategory(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id/fields')
  assignFields(
    @Param('id') id: string,

    @Body() dto: AssignPackageFieldsDto,
  ) {
    return this.service.assignFields(id, dto);
  }
}

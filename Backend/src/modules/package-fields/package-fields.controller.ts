import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { PackageFieldsService } from './package-fields.service';
import { CreatePackageFieldDto } from './dto/create-package-field.dto';
import { AssignPackageFieldsDto } from './dto/assign-package-field.dto';

@Controller('package-fields')
export class PackageFieldsController {
  constructor(private service: PackageFieldsService) {}

  @Post()
  create(@Body() dto: CreatePackageFieldDto) {
    return this.service.create(dto);
  }

  @Patch(':id/fields')
  assignFields(
    @Param('id') id: string,

    @Body() dto: AssignPackageFieldsDto,
  ) {
    return this.service.assignFields(id, dto);
  }
}

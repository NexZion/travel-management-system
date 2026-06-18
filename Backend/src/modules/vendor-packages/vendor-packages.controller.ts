import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { VendorPackagesService } from './vendor-packages.service';


@Controller('vendor-packages')
export class VendorPackagesController {
  constructor(private readonly service: VendorPackagesService) {}

  @Post()
  create(@Body() dto: CreateVendorPackageDto) {
    return this.service.create(dto);
  }

  @Get('vendor/:vendorId')
  findByVendor(@Param('vendorId') vendorId: string) {
    return this.service.findByVendor(vendorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}

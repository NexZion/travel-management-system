import { Controller, Post, Get, Param, Body, UseGuards, Req, Patch, Delete } from '@nestjs/common';
import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { VendorPackagesService } from './vendor-packages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UpdateVendorPackageDto } from './dto/update-vendor-package.dto';

@Controller('vendor-packages')
export class VendorPackagesController {
  constructor(private readonly service: VendorPackagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateVendorPackageDto, @CurrentUser() user: any) {
    return this.service.create(dto, user.id ?? user.sub);
  }

  @Get('vendor/:vendorId')
  findByVendor(@Param('vendorId') vendorId: string) {
    return this.service.findByVendor(vendorId);
  }

  @Get('my-packages')
  @UseGuards(JwtAuthGuard)
  findMyPackages(@Req() req) {
    return this.service.findByVendor(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,

    @Body() dto: UpdateVendorPackageDto,

    @Req() req,
  ) {
    return this.service.update(id, req.user.userId, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id') id: string,

    @Req() req,
  ) {
    return this.service.remove(id, req.user.userId);
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Req,
  Delete,
  Patch,
  UseGuards,
  Query,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { VendorStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { SearchVendorDto } from './dto/search-vendor.dto';
import { AddVendorFieldDto } from './dto/add-vendor-field.dto';
import { UpdateVendorFieldDto } from './dto/update-vendor-field.dto';
import { UpdateFieldOrderDto } from './dto/update-field-order.dto';
import { CreateVendorMediaDto } from './dto/create-vendor-media.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateVendorDto, @CurrentUser() user: any) {
    return this.vendorsService.create(dto, user.id ?? user.sub);
  }

  @Get()
  findAll() {
    return this.vendorsService.findAll();
  }

  @Post('search')
  search(@Query() dto: SearchVendorDto) {
    return this.vendorsService.search(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateVendorStatusDto,
    @CurrentUser() user: any,
  ) {
    return this.vendorsService.updateStatus(id, dto, user.id ?? user.sub);
  }

  @Get(':id/status-history')
  getStatusHistory(@Param('id') id: string) {
    return this.vendorsService.getStatusHistory(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() dto: UpdateVendorDto) {
    return this.vendorsService.update(id, dto);
  }

  @Post(':id/custom-fields')
  addCustomField(@Param('id') id: string, @Body() dto: AddVendorFieldDto) {
    return this.vendorsService.addCustomField(id, dto);
  }

  @Patch(':id/custom-fields/:fieldId')
  updateCustomField(
    @Param('id') vendorId: string,
    @Param('fieldId') fieldId: string,
    @Body() dto: UpdateVendorFieldDto,
  ) {
    return this.vendorsService.updateCustomField(vendorId, fieldId, dto);
  }

  @Delete(':id/custom-fields/:fieldId')
  deleteCustomField(
    @Param('id') vendorId: string,
    @Param('fieldId') fieldId: string,
  ) {
    return this.vendorsService.deleteCustomField(vendorId, fieldId);
  }

  @Patch(':id/custom-fields/:fieldId/order')
  updateFieldOrder(
    @Param('id') vendorId: string,
    @Param('fieldId') fieldId: string,
    @Body() dto: UpdateFieldOrderDto,
  ) {
    return this.vendorsService.updateFieldOrder(
      vendorId,
      fieldId,
      dto.displayOrder,
    );
  }

  @Post(':id/media')
  addMedia(@Param('id') id: string, @Body() dto: CreateVendorMediaDto) {
    return this.vendorsService.addMedia(id, dto);
  }

  @Delete('media/:mediaId')
  deleteMedia(@Param('mediaId') mediaId: string) {
    return this.vendorsService.deleteMedia(mediaId);
  }

  @Post(':id/reviews')
  @UseGuards(JwtAuthGuard)
  createReview(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() dto: CreateReviewDto,
  ) {
    return this.vendorsService.createReview(id, user.id ?? user.sub, dto);
  }

  @Get(':id/reviews')
  getReviews(@Param('id') id: string) {
    return this.vendorsService.getReviews(id);
  }
}

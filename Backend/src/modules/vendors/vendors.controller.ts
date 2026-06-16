import { Controller, Post, Body, Get, Param, Put, Patch, UseGuards, } from '@nestjs/common';
import { VendorsService, } from './vendors.service';
import { CreateVendorDto, } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { VendorStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('vendors')
export class VendorsController {

    constructor( private readonly vendorsService: VendorsService, ){}


    @UseGuards(JwtAuthGuard)
    @Post()
    create(
    @Body() dto:CreateVendorDto,
    @CurrentUser() user: any,
    ){
        return this.vendorsService.create(dto, user.id ?? user.sub);
    }

    @Get()
    findAll(){
        return this.vendorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.vendorsService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id:string,
        @Body() dto:UpdateVendorDto
    ){
        return this.vendorsService.update( id, dto );
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id:string,
        @Body() dto:UpdateVendorStatusDto
    ){
        return this.vendorsService.updateStatus( id, VendorStatus[dto.status] );
    }

}
import { Controller, Post, Body, Get, Param, Put, Patch, UseGuards, Query } from '@nestjs/common';
import { VendorsService, } from './vendors.service';
import { CreateVendorDto, } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { VendorStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { SearchVendorDto } from './dto/search-vendor.dto';

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

    @Post('search')
    search(
        @Query() dto:SearchVendorDto
    ){
        return this.vendorsService.search(dto);
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.vendorsService.findOne(id);
    }

    @Patch(':id/status')
    @UseGuards(
        JwtAuthGuard,
        RolesGuard
    )
    @Roles('ADMIN')
    updateStatus(
        @Param('id') id:string,
        @Body() dto:UpdateVendorStatusDto,
    ){
        return this.vendorsService.updateStatus(
            id,
            dto,
        );
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    update(
        @Param('id') id:string,
        @Body() dto:UpdateVendorDto,

    ){
        return this.vendorsService.update(
            id,
            dto,
        );
    }

}
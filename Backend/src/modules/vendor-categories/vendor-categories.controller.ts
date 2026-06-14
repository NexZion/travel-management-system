import { Controller, Get, Post, Body, Param, } from '@nestjs/common';
import { VendorCategoriesService } from './vendor-categories.service';
import { CreateVendorCategoryDto } from './dto/create-vendor-category.dto';

@Controller('vendor-categories')
export class VendorCategoriesController {

    constructor( private readonly vendorService:VendorCategoriesService, ){}

    @Post()
    create( @Body() dto:CreateVendorCategoryDto, ){
        return this.vendorService.create(dto);
    }

    @Get()
    findAll(){
        return this.vendorService.findAll();
    }

    @Get(':id/form')
    getForm(
    @Param('id') id: string, ) {
        return this.vendorService.getForm(id);
    }

    @Get(':id')
    findOne(
        @Param('id') id:string,){
        return this.vendorService.findOne(id);
    }

}
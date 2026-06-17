import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { FieldsService } from './fields.service';
import { CreateFieldOptionDto } from './dto/create-field-option.dto';

@Controller('fields')
export class FieldsController {
    constructor(private readonly fieldsService: FieldsService) {}

    @Post()
    create(
    @Body() dto: CreateFieldDto,
    ) {
    return this.fieldsService.create(dto);
    }

    @Get()
    findAll() {
    return this.fieldsService.findAll();
    }

    @Get(':id')
    findOne(
    @Param('id') id: string,
    ) {
    return this.fieldsService.findOne(id);
    }

    @Post('options')
    createOption(
    @Body() dto: CreateFieldOptionDto,
    ) {
    return this.fieldsService.createOption(dto);
    }
}

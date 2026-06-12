import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateFieldSetDto } from './dto/create-field-set.dto';
import { FieldSetsService } from './field-sets.service';
import { CreateFieldSetFieldDto } from './dto/create-field-set-field.dto';

@Controller('field-sets')
export class FieldSetsController {
    constructor(private readonly fieldSetsService: FieldSetsService) {}

    @Post()
    create(
    @Body() dto: CreateFieldSetDto,
    ) {
    return this.fieldSetsService.create(dto);
    }

    @Get()
    findAll() {
    return this.fieldSetsService.findAll();
    }

    @Get(':id')
    findOne(
    @Param('id') id: string,
    ) {
    return this.fieldSetsService.findOne(id);
    }

    @Post('attach-field')
    attachField(
    @Body() dto: CreateFieldSetFieldDto,
    ) {
    return this.fieldSetsService.attachField(dto);
    }
}

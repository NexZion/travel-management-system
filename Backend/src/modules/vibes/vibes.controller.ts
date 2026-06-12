import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { VibesService } from './vibes.service';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';

@Controller('vibes')
export class VibesController {
  constructor(
    private readonly vibesService: VibesService,
  ) {}

  @Post()
  create(@Body() dto: CreateVibeDto) {
    return this.vibesService.create(dto);
  }

  @Get()
  findAll() {
    return this.vibesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vibesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateVibeDto,
  ) {
    return this.vibesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vibesService.remove(id);
  }
}
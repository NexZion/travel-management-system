import {ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateTravelStyleDto } from './dto/create-travel-style.dto';
import { UpdateTravelStyleDto } from './dto/update-travel-style.dto';

@Injectable()
export class TravelStylesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTravelStyleDto) {
    const exists = await this.prisma.travelStyle.findUnique({
      where: {
        name: dto.name,
      },
    });

    if (exists) {
      throw new ConflictException(
        'Travel style already exists',
      );
    }

    return this.prisma.travelStyle.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.travelStyle.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const style = await this.prisma.travelStyle.findUnique({
      where: { id },
    });

    if (!style) {
      throw new NotFoundException(
        'Travel style not found',
      );
    }

    return style;
  }

  async update(
    id: string,
    dto: UpdateTravelStyleDto,
  ) {
    await this.findOne(id);

    return this.prisma.travelStyle.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    const tripCount =
      await this.prisma.trip.count({
        where: {
          travelStyleId: id,
        },
      });

    if (tripCount > 0) {
      throw new ConflictException(
        'Cannot delete style used by trips',
      );
    }

    return this.prisma.travelStyle.delete({
      where: { id },
    });
  }
}
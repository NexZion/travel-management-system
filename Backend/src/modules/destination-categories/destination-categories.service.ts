import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';

import { CreateDestinationCategoryDto } from './dto/create-destination-category.dto';
import { UpdateDestinationCategoryDto } from './dto/update-destination-category.dto';

@Injectable()
export class DestinationCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDestinationCategoryDto) {
    const exists = await this.prisma.destinationCategory.findUnique({
      where: { name: dto.name },
    });

    if (exists) {
      throw new ConflictException(
        'Destination category already exists',
      );
    }

    return this.prisma.destinationCategory.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.destinationCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const category =
      await this.prisma.destinationCategory.findUnique({
        where: { id },
      });

    if (!category) {
      throw new NotFoundException(
        'Destination category not found',
      );
    }

    return category;
  }

  async update(
    id: string,
    dto: UpdateDestinationCategoryDto,
  ) {
    await this.findOne(id);

    return this.prisma.destinationCategory.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    const mappingCount =
      await this.prisma.destinationCategoryMapping.count({
        where: {
          categoryId: id,
        },
      });

    if (mappingCount > 0) {
      throw new ConflictException(
        'Cannot delete category that is assigned to destinations',
      );
    }

    return this.prisma.destinationCategory.delete({
      where: { id },
    });
  }
}
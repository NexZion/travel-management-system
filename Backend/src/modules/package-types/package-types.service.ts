import { Injectable, NotFoundException, } from '@nestjs/common';
import { CreatePackageTypeDto } from './dto/create-package-types.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class PackageTypesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePackageTypeDto) {
    return this.prisma.packageType.create({
      data: {
        categoryId: dto.categoryId,
        name: dto.name,
        description: dto.description,
      },
    });
  }

  async findByCategory(categoryId: string) {
    return this.prisma.packageType.findMany({
      where: {
        categoryId,
        isActive: true,
      },

      include: {
        fieldSet: {
          include: {
            fields: {
              include: {
                field: true,
              },
              orderBy: {
                displayOrder: 'asc',
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const packageType = await this.prisma.packageType.findUnique({
      where: { id },

      include: {
        fieldSet: {
          include: {
            fields: {
              include: {
                field: true,
              },
            },
          },
        },
      },
    });

    if (!packageType) {
      throw new NotFoundException('PackageType not found');
    }

    return packageType;
  }
}

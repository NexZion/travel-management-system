import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePackageTypeDto } from './dto/create-package-types.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AssignPackageFieldsDto } from './dto/assign-fields.dto';

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

  async assignFields(packageTypeId: string, dto: AssignPackageFieldsDto) {
    const packageType = await this.prisma.packageType.findUnique({
      where: {
        id: packageTypeId,
      },
    });

    if (!packageType) {
      throw new NotFoundException('Package type not found');
    }

    return this.prisma.$transaction(async (tx) => {
      // 1. Create FieldSet

      const fieldSet = await tx.packageTypeFieldSet.create({
        data: {
          packageTypeId,
        },
      });

      // 2. Create fields

      await tx.packageTypeField.createMany({
        data: dto.fields.map((field) => ({
          fieldSetId: fieldSet.id,

          fieldId: field.fieldId,

          isRequired: field.isRequired,

          displayOrder: field.displayOrder ?? 0,
        })),
      });

      return tx.packageTypeFieldSet.findUnique({
        where: {
          id: fieldSet.id,
        },

        include: {
          fields: {
            include: {
              field: true,
            },
          },
        },
      });
    });
  }
}

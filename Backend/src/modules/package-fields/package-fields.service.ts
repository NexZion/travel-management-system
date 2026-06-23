import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreatePackageFieldDto } from './dto/create-package-field.dto';
import { AssignPackageFieldsDto } from './dto/assign-package-field.dto';

@Injectable()
export class PackageFieldsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePackageFieldDto) {
    return this.prisma.packageField.create({
      data: {
        name: dto.name,

        label: dto.label,

        dataType: dto.dataType,

        placeholder: dto.placeholder,

        helpText: dto.helpText,
      },
    });
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
      let fieldSet = await tx.packageTypeFieldSet.findUnique({
        where: {
          packageTypeId,
        },
      });

      if (!fieldSet) {
        fieldSet = await tx.packageTypeFieldSet.create({
          data: {
            packageTypeId,
          },
        });
      }

      await tx.packageTypeField.createMany({
        data: dto.fields.map((field) => ({
          fieldSetId: fieldSet!.id,

          fieldId: field.fieldId,

          isRequired: field.isRequired,

          displayOrder: field.displayOrder ?? 0,
        })),
      });

      return fieldSet;
    });
  }
}

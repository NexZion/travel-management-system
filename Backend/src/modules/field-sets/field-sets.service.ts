import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFieldSetDto } from './dto/create-field-set.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateFieldSetFieldDto } from './dto/create-field-set-field.dto';

@Injectable()
export class FieldSetsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateFieldSetDto) {
    return this.prisma.fieldSet.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.fieldSet.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.fieldSet.findUnique({
      where: { id },
    });
  }

  async attachField(
    dto: CreateFieldSetFieldDto,
    ) {

    return this.prisma.fieldSetField.create({
        data: {
        fieldSetId: dto.fieldSetId,
        fieldId: dto.fieldId,
        displayOrder: dto.displayOrder,
        isRequired: dto.isRequired,
        readOnly: dto.readOnly,
        },
    });

  }

  async getForm(fieldSetId: string) {
    const fieldSet = await this.prisma.fieldSet.findUnique({
      where: { id: fieldSetId },
      include: {
        fields: {
          include: {
            field: {
              include: {
                options: true,
              },
            },
          },
          orderBy: {
            displayOrder: 'asc',
          },
        },
      },
    });

    if (!fieldSet) {
      throw new NotFoundException('FieldSet not found');
    }

    return {
      id: fieldSet.id,
      name: fieldSet.name,
      description: fieldSet.description,
      fields: fieldSet.fields.map((fsField) => ({
        id: fsField.field.id,
        name: fsField.field.name,
        label: fsField.field.label,
        dataType: fsField.field.dataType,
        isRequired: fsField.isRequired,
        readOnly: fsField.readOnly,
        options: fsField.field.options
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((opt) => ({
            label: opt.label,
            value: opt.value,
          })),
      })),
    };
  }
}

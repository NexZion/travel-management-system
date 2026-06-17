import { Injectable } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateFieldOptionDto } from './dto/create-field-option.dto';

@Injectable()
export class FieldsService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateFieldDto) {
    return this.prisma.field.create({
      data: {
        name: dto.name,
        label: dto.label,
        dataType: dto.dataType,
        placeholder: dto.placeholder,
        helpText: dto.helpText,
        defaultValue: dto.defaultValue,
      },
    });
  }

  async findAll() {
    return this.prisma.field.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.field.findUnique({
      where: { id },
    });
  }

  async createOption(dto: CreateFieldOptionDto) {

    const field = await this.prisma.field.findUnique({
        where: {
        id: dto.fieldId,
        },
    });

    if (!field) {
        throw new Error('Field not found');
    }

    return this.prisma.fieldOption.create({
        data: {
            fieldId: dto.fieldId,
            label: dto.label,
            value: dto.value,
            displayOrder: dto.displayOrder ?? 0,
        },
    });

  }
}

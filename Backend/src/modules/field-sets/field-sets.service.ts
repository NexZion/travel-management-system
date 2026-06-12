import { Injectable } from '@nestjs/common';
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
}

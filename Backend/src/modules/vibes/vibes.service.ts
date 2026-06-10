import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateVibeDto } from './dto/create-vibe.dto';
import { UpdateVibeDto } from './dto/update-vibe.dto';

@Injectable()
export class VibesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateVibeDto) {
    const exists = await this.prisma.vibe.findUnique({
      where: { name: dto.name },
    });

    if (exists) {
      throw new ConflictException('Vibe already exists');
    }

    return this.prisma.vibe.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.vibe.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const vibe = await this.prisma.vibe.findUnique({
      where: { id },
    });

    if (!vibe) {
      throw new NotFoundException('Vibe not found');
    }

    return vibe;
  }

  async update(id: string, dto: UpdateVibeDto) {
    await this.findOne(id);

    return this.prisma.vibe.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    const tripCount = await this.prisma.trip.count({
      where: {
        vibeId: id,
      },
    });

    if (tripCount > 0) {
      throw new ConflictException(
        'Cannot delete vibe used by trips',
      );
    }

    return this.prisma.vibe.delete({
      where: { id },
    });
  }
}
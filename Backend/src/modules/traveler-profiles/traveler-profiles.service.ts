
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';
import { UpdateTravelerProfileDto } from './dto/update-traveler-profile.dto';

@Injectable()
export class TravelerProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyProfile(userId: string) {
    return this.prisma.travelerProfile.findUnique({
      where: { userId },
    });
  }

  async updateMyProfile(
    userId: string,
    dto: UpdateTravelerProfileDto,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.travelerProfile.upsert({
      where: { userId },

      create: {
        userId,
        ...dto,
      },

      update: {
        ...dto,
      },
    });
  }

  async completeOnboarding(userId: string) {
    const profile = await this.prisma.travelerProfile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException(
        'Create your traveler profile before completing onboarding',
      );
    }

    return this.prisma.travelerProfile.update({
      where: { userId },
      data: {
        onboardingCompletedAt: new Date(),
      },
    });
  }
}

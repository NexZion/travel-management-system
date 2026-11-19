
import {
  Controller,
  Get,
  Put,
  Patch,
  Body,
  UseGuards,
} from '@nestjs/common';

import { TravelerProfilesService } from './traveler-profiles.service';
import { UpdateTravelerProfileDto } from './dto/update-traveler-profile.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('traveler-profiles')
@UseGuards(JwtAuthGuard)
export class TravelerProfilesController {
  constructor(
    private readonly travelerProfilesService: TravelerProfilesService,
  ) {}

  @Get('me')
  getMyProfile(@CurrentUser() user: any) {
    return this.travelerProfilesService.getMyProfile(
      user.id ?? user.sub,
    );
  }

  @Put('me')
  updateMyProfile(
    @CurrentUser() user: any,
    @Body() dto: UpdateTravelerProfileDto,
  ) {
    return this.travelerProfilesService.updateMyProfile(
      user.id ?? user.sub,
      dto,
    );
  }

  @Patch('me/onboarding')
  completeOnboarding(@CurrentUser() user: any) {
    return this.travelerProfilesService.completeOnboarding(
      user.id ?? user.sub,
    );
  }
}


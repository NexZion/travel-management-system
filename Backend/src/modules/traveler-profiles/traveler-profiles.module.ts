
import { Module } from '@nestjs/common';

import { TravelerProfilesController } from './traveler-profiles.controller';
import { TravelerProfilesService } from './traveler-profiles.service';

@Module({
  controllers: [TravelerProfilesController],
  providers: [TravelerProfilesService],
  exports: [TravelerProfilesService],
})
export class TravelerProfilesModule {}

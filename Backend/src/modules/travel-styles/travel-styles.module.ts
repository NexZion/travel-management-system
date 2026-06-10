import { Module } from '@nestjs/common';
import { TravelStylesController } from './travel-styles.controller';
import { TravelStylesService } from './travel-styles.service';

@Module({
  controllers: [TravelStylesController],
  providers: [TravelStylesService]
})
export class TravelStylesModule {}

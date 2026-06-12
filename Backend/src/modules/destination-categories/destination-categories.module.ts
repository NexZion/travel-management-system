import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { DestinationCategoriesController } from './destination-categories.controller';
import { DestinationCategoriesService } from './destination-categories.service';

@Module({
  imports: [PrismaModule],
  controllers: [DestinationCategoriesController],
  providers: [DestinationCategoriesService],
})
export class DestinationCategoriesModule {}
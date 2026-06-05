import { Module } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    RedisModule,
  ],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}

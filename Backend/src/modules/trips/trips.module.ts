import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    RedisModule, 
  ],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}
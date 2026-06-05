import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProfilesModule } from './profiles/profiles.module';
//import { TripsModule } from './trips/trips.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TripsModule } from './modules/trips/trips.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { BullModule } from '@nestjs/bullmq';
import { QueuesModule } from './queues/queues.module';
import { envValidationSchema } from './config/env.validation';
import { PrismaModule } from './database/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './modules/auth/guards/roles.guard';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { DestinationsService } from './modules/destinations/destinations.service';
import { DestinationsController } from './modules/destinations/destinations.controller';
import { DestinationsModule } from './modules/destinations/destinations.module';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      validationSchema: envValidationSchema,
      load: [jwtConfig],
    }), 
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    PrismaModule,
    AuthModule, 
    UsersModule, 
    TripsModule,
    RedisModule, 
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }), QueuesModule, DestinationsModule
  ],
  controllers: [AppController, DestinationsController],
  providers: [AppService, RolesGuard,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
  { 
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
  DestinationsService,
  
],
})
export class AppModule {}

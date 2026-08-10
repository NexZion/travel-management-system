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
import { TravelStylesModule } from './modules/travel-styles/travel-styles.module';
import { VibesService } from './modules/vibes/vibes.service';
import { VibesModule } from './modules/vibes/vibes.module';
import { DestinationCategoriesModule } from './modules/destination-categories/destination-categories.module';
import jwtConfig from './config/jwt.config';
import { platform } from 'os';
import { PlacesModule } from './modules/places/places.module';
import { VendorCategoriesModule } from './modules/vendor-categories/vendor-categories.module';
import { FieldSetsModule } from './modules/field-sets/field-sets.module';
import { FieldsModule } from './modules/fields/fields.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { PackageTypesModule } from './modules/package-types/package-types.module';
import { VendorPackagesModule } from './modules/vendor-packages/vendor-packages.module';
import { PackageFieldsModule } from './modules/package-fields/package-fields.module';
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
    PlacesModule,
    TripsModule,
    RedisModule, 
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }), QueuesModule, DestinationsModule, TravelStylesModule, VibesModule, DestinationCategoriesModule, VendorCategoriesModule, FieldSetsModule, FieldsModule, VendorsModule, PackageTypesModule, VendorPackagesModule, PackageFieldsModule
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
  VibesService,
  
],
})
export class AppModule {}

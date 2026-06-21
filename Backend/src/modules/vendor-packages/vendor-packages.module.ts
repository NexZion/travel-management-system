import { Module } from '@nestjs/common';
import { VendorPackagesService } from './vendor-packages.service';
import { VendorPackagesController } from './vendor-packages.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [VendorPackagesService],
  controllers: [VendorPackagesController]
})
export class VendorPackagesModule {}

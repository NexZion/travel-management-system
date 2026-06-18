import { Module } from '@nestjs/common';
import { VendorPackagesService } from './vendor-packages.service';
import { VendorPackagesController } from './vendor-packages.controller';

@Module({
  providers: [VendorPackagesService],
  controllers: [VendorPackagesController]
})
export class VendorPackagesModule {}

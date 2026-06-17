import { Module } from '@nestjs/common';
import { VendorCategoriesController } from './vendor-categories.controller';
import { VendorCategoriesService } from './vendor-categories.service';

@Module({
  controllers: [VendorCategoriesController],
  providers: [VendorCategoriesService]
})
export class VendorCategoriesModule {}

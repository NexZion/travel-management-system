import { Module } from '@nestjs/common';
import { PackageTypesService } from './package-types.service';
import { PackageTypesController } from './package-types.controller';

@Module({
  providers: [PackageTypesService],
  controllers: [PackageTypesController]
})
export class PackageTypesModule {}

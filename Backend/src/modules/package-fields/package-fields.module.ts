import { Module } from '@nestjs/common';
import { PackageFieldsService } from './package-fields.service';
import { PackageFieldsController } from './package-fields.controller';

@Module({
  providers: [PackageFieldsService],
  controllers: [PackageFieldsController]
})
export class PackageFieldsModule {}

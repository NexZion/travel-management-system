import { Module } from '@nestjs/common';
import { FieldSetsController } from './field-sets.controller';
import { FieldSetsService } from './field-sets.service';

@Module({
  controllers: [FieldSetsController],
  providers: [FieldSetsService]
})
export class FieldSetsModule {}

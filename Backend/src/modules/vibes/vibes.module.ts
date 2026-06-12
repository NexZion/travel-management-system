import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { VibesController } from './vibes.controller';
import { VibesService } from './vibes.service';

@Module({
  imports: [PrismaModule],
  controllers: [VibesController],
  providers: [VibesService],
})
export class VibesModule {}
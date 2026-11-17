import { Test, TestingModule } from '@nestjs/testing';
import { VibesService } from './vibes.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('VibesService', () => {
  let service: VibesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VibesService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<VibesService>(VibesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

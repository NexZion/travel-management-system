import { Test, TestingModule } from '@nestjs/testing';
import { FieldSetsService } from './field-sets.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('FieldSetsService', () => {
  let service: FieldSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FieldSetsService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<FieldSetsService>(FieldSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

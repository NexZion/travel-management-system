import { Test, TestingModule } from '@nestjs/testing';
import { FieldsService } from './fields.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('FieldsService', () => {
  let service: FieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FieldsService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<FieldsService>(FieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

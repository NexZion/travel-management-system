import { Test, TestingModule } from '@nestjs/testing';
import { PackageFieldsService } from './package-fields.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('PackageFieldsService', () => {
  let service: PackageFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackageFieldsService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<PackageFieldsService>(PackageFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

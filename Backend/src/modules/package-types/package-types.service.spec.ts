import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesService } from './package-types.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('PackageTypesService', () => {
  let service: PackageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PackageTypesService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<PackageTypesService>(PackageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

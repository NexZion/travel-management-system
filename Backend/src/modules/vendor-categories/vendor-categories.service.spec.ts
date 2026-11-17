import { Test, TestingModule } from '@nestjs/testing';
import { VendorCategoriesService } from './vendor-categories.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('VendorCategoriesService', () => {
  let service: VendorCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VendorCategoriesService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<VendorCategoriesService>(VendorCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

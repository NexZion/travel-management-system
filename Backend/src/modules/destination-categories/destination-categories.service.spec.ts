import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCategoriesService } from './destination-categories.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('DestinationCategoriesService', () => {
  let service: DestinationCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DestinationCategoriesService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<DestinationCategoriesService>(DestinationCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

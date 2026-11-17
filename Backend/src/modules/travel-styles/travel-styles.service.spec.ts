import { Test, TestingModule } from '@nestjs/testing';
import { TravelStylesService } from './travel-styles.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';

describe('TravelStylesService', () => {
  let service: TravelStylesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TravelStylesService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<TravelStylesService>(TravelStylesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

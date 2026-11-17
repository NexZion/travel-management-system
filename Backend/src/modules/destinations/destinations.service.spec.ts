import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsService } from './destinations.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';
import { RedisService } from '../../redis/redis.service.ts';

describe('DestinationsService', () => {
  let service: DestinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DestinationsService,
        { provide: PrismaService, useValue: {} },
        { provide: RedisService, useValue: {} },
      ],
    }).compile();

    service = module.get<DestinationsService>(DestinationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

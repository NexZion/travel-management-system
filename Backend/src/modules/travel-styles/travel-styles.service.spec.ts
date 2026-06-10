import { Test, TestingModule } from '@nestjs/testing';
import { TravelStylesService } from './travel-styles.service';

describe('TravelStylesService', () => {
  let service: TravelStylesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelStylesService],
    }).compile();

    service = module.get<TravelStylesService>(TravelStylesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

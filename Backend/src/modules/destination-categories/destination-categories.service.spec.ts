import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCategoriesService } from './destination-categories.service';

describe('DestinationCategoriesService', () => {
  let service: DestinationCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationCategoriesService],
    }).compile();

    service = module.get<DestinationCategoriesService>(DestinationCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { VendorCategoriesService } from './vendor-categories.service';

describe('VendorCategoriesService', () => {
  let service: VendorCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorCategoriesService],
    }).compile();

    service = module.get<VendorCategoriesService>(VendorCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

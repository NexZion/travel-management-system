import { Test, TestingModule } from '@nestjs/testing';
import { VendorCategoriesController } from './vendor-categories.controller';

describe('VendorCategoriesController', () => {
  let controller: VendorCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorCategoriesController],
    }).compile();

    controller = module.get<VendorCategoriesController>(VendorCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

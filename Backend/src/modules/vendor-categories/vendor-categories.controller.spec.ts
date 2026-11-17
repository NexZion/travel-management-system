import { Test, TestingModule } from '@nestjs/testing';
import { VendorCategoriesController } from './vendor-categories.controller.ts';
import { VendorCategoriesService } from './vendor-categories.service.ts';

describe('VendorCategoriesController', () => {
  let controller: VendorCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorCategoriesController],
      providers: [
        { provide: VendorCategoriesService, useValue: {} },
      ],
    }).compile();

    controller = module.get<VendorCategoriesController>(VendorCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCategoriesController } from './destination-categories.controller.ts';
import { DestinationCategoriesService } from './destination-categories.service.ts';

describe('DestinationCategoriesController', () => {
  let controller: DestinationCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationCategoriesController],
      providers: [
        { provide: DestinationCategoriesService, useValue: {} },
      ],
    }).compile();

    controller = module.get<DestinationCategoriesController>(DestinationCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

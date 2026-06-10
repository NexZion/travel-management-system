import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCategoriesController } from './destination-categories.controller';

describe('DestinationCategoriesController', () => {
  let controller: DestinationCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationCategoriesController],
    }).compile();

    controller = module.get<DestinationCategoriesController>(DestinationCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TravelStylesController } from './travel-styles.controller';

describe('TravelStylesController', () => {
  let controller: TravelStylesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelStylesController],
    }).compile();

    controller = module.get<TravelStylesController>(TravelStylesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

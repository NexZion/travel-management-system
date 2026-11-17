import { Test, TestingModule } from '@nestjs/testing';
import { TravelStylesController } from './travel-styles.controller.ts';
import { TravelStylesService } from './travel-styles.service.ts';

describe('TravelStylesController', () => {
  let controller: TravelStylesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelStylesController],
      providers: [
        { provide: TravelStylesService, useValue: {} },
      ],
    }).compile();

    controller = module.get<TravelStylesController>(TravelStylesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

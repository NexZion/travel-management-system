import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsController } from './destinations.controller.ts';
import { DestinationsService } from './destinations.service.ts';

describe('DestinationsController', () => {
  let controller: DestinationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationsController],
      providers: [
        { provide: DestinationsService, useValue: {} },
      ],
    }).compile();

    controller = module.get<DestinationsController>(DestinationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

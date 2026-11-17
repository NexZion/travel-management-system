import { Test, TestingModule } from '@nestjs/testing';
import { VibesController } from './vibes.controller.ts';
import { VibesService } from './vibes.service.ts';

describe('VibesController', () => {
  let controller: VibesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VibesController],
      providers: [
        { provide: VibesService, useValue: {} },
      ],
    }).compile();

    controller = module.get<VibesController>(VibesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

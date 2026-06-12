import { Test, TestingModule } from '@nestjs/testing';
import { VibesController } from './vibes.controller';

describe('VibesController', () => {
  let controller: VibesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VibesController],
    }).compile();

    controller = module.get<VibesController>(VibesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

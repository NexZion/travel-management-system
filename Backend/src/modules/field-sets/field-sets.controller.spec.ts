import { Test, TestingModule } from '@nestjs/testing';
import { FieldSetsController } from './field-sets.controller';

describe('FieldSetsController', () => {
  let controller: FieldSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldSetsController],
    }).compile();

    controller = module.get<FieldSetsController>(FieldSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

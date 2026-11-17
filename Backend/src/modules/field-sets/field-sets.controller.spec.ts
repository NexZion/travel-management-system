import { Test, TestingModule } from '@nestjs/testing';
import { FieldSetsController } from './field-sets.controller.ts';
import { FieldSetsService } from './field-sets.service.ts';

describe('FieldSetsController', () => {
  let controller: FieldSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldSetsController],
      providers: [
        { provide: FieldSetsService, useValue: {} },
      ],
    }).compile();

    controller = module.get<FieldSetsController>(FieldSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

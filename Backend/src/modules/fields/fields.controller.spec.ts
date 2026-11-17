import { Test, TestingModule } from '@nestjs/testing';
import { FieldsController } from './fields.controller.ts';
import { FieldsService } from './fields.service.ts';

describe('FieldsController', () => {
  let controller: FieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldsController],
      providers: [
        { provide: FieldsService, useValue: {} },
      ],
    }).compile();

    controller = module.get<FieldsController>(FieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PackageFieldsController } from './package-fields.controller.ts';
import { PackageFieldsService } from './package-fields.service.ts';

describe('PackageFieldsController', () => {
  let controller: PackageFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageFieldsController],
      providers: [
        { provide: PackageFieldsService, useValue: {} },
      ],
    }).compile();

    controller = module.get<PackageFieldsController>(PackageFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

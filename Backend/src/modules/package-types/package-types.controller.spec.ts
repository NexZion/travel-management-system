import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesController } from './package-types.controller.ts';
import { PackageTypesService } from './package-types.service.ts';

describe('PackageTypesController', () => {
  let controller: PackageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageTypesController],
      providers: [
        { provide: PackageTypesService, useValue: {} },
      ],
    }).compile();

    controller = module.get<PackageTypesController>(PackageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

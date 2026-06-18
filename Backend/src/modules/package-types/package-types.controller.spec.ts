import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesController } from './package-types.controller';

describe('PackageTypesController', () => {
  let controller: PackageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageTypesController],
    }).compile();

    controller = module.get<PackageTypesController>(PackageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

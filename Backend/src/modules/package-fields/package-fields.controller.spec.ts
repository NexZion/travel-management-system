import { Test, TestingModule } from '@nestjs/testing';
import { PackageFieldsController } from './package-fields.controller';

describe('PackageFieldsController', () => {
  let controller: PackageFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageFieldsController],
    }).compile();

    controller = module.get<PackageFieldsController>(PackageFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

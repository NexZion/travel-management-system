import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesService } from './package-types.service';

describe('PackageTypesService', () => {
  let service: PackageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageTypesService],
    }).compile();

    service = module.get<PackageTypesService>(PackageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PackageFieldsService } from './package-fields.service';

describe('PackageFieldsService', () => {
  let service: PackageFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageFieldsService],
    }).compile();

    service = module.get<PackageFieldsService>(PackageFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

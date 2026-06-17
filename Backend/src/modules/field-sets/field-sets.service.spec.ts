import { Test, TestingModule } from '@nestjs/testing';
import { FieldSetsService } from './field-sets.service';

describe('FieldSetsService', () => {
  let service: FieldSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldSetsService],
    }).compile();

    service = module.get<FieldSetsService>(FieldSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

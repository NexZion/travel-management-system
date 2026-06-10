import { Test, TestingModule } from '@nestjs/testing';
import { VibesService } from './vibes.service';

describe('VibesService', () => {
  let service: VibesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VibesService],
    }).compile();

    service = module.get<VibesService>(VibesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

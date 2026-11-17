import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service.ts';
import { PrismaService } from '../../database/prisma/prisma.service.ts';
import { TokenService } from './token.service.ts';
import { AuditService } from '../../common/services/audit.service.ts';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: {} },
        { provide: TokenService, useValue: {} },
        { provide: AuditService, useValue: {} },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

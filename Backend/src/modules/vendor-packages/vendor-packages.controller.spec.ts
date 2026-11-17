import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { VendorPackagesController } from './vendor-packages.controller.ts';
import { VendorPackagesService } from './vendor-packages.service.ts';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PrismaService } from '../../database/prisma/prisma.service';

describe('VendorPackagesController', () => {
  let controller: VendorPackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorPackagesController],
      providers: [
        { provide: VendorPackagesService, useValue: {} },
        { provide: JwtService, useValue: { verify: jest.fn() } },
        { provide: Reflector, useValue: { getAllAndOverride: jest.fn(() => false) } },
        { provide: PrismaService, useValue: {} },
        { provide: JwtAuthGuard, useValue: { canActivate: jest.fn().mockReturnValue(true) } },
      ],
    }).compile();

    controller = module.get<VendorPackagesController>(VendorPackagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

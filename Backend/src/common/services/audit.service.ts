import { Injectable } from '@nestjs/common';

import { PrismaService }
from 'src/database/prisma/prisma.service';

@Injectable()
export class AuditService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async log(data: {
    action: string;
    userId?: string;
    ipAddress?: string;
    userAgent?: string;
    metadata?: any;
  }) {

    return this.prisma.auditLog.create({
      data,
    });
  }
}
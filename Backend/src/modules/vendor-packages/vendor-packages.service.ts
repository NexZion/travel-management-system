import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class VendorPackagesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateVendorPackageDto) {
    const vendor = await this.prisma.vendor.findUnique({
      where: { id: dto.vendorId },
    });

    if (!vendor) throw new NotFoundException('Vendor not found');

    if (vendor.status !== 'APPROVED') {
      throw new ForbiddenException('Vendor not approved');
    }

    // Get package type with schema
    const packageType = await this.prisma.packageType.findUnique({
      where: { id: dto.packageTypeId },
      include: {
        fieldSet: {
          include: {
            fields: true,
          },
        },
      },
    });

    if (!packageType) {
      throw new NotFoundException('PackageType not found');
    }

    return this.prisma.$transaction(async (tx) => {
      // 1. Create package
      const pkg = await tx.vendorPackage.create({
        data: {
          vendorId: dto.vendorId,
          packageTypeId: dto.packageTypeId,
          title: dto.title,
          description: dto.description,
          basePrice: dto.basePrice,
        },
      });

      // 2. Save dynamic field values
      await tx.vendorPackageFieldValue.createMany({
        data: dto.fields.map((f) => ({
          packageId: pkg.id,
          fieldId: f.fieldId,
          value: f.value,
        })),
      });

      return pkg;
    });
  }

  async findOne(id: string) {
    return this.prisma.vendorPackage.findUnique({
      where: { id },

      include: {
        vendor: true,

        packageType: {
          include: {
            fieldSet: {
              include: {
                fields: {
                  include: {
                    field: true,
                  },
                },
              },
            },
          },
        },

        fieldValues: {
          include: {
            field: true,
          },
        },
      },
    });
  }

  async findByVendor(vendorId: string) {
    return this.prisma.vendorPackage.findMany({
      where: { vendorId },

      include: {
        packageType: true,
        fieldValues: {
          include: {
            field: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

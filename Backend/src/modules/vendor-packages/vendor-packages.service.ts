import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { CreateVendorPackageDto } from './dto/create-vendor-package.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { validatePackageFields } from './helpers/package-field-validator';
import { UpdateVendorPackageDto } from './dto/update-vendor-package.dto';

@Injectable()
export class VendorPackagesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateVendorPackageDto, userId: string) {
    const vendor = await this.prisma.vendor.findFirst({
      where: { userId: userId },
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

    if (packageType.categoryId !== vendor.categoryId) {
      throw new BadRequestException(
        'Invalid package type for this vendor category',
      );
    }

    if (!packageType.fieldSet) {
      throw new BadRequestException('Package type has no fields configured');
    }

    validatePackageFields(
      packageType.fieldSet.fields,

      dto.fields,
    );

    return this.prisma.$transaction(async (tx) => {
      // 1. Create package
      const pkg = await tx.vendorPackage.create({
        data: {
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

      return tx.vendorPackage.findUnique({
        where: {
          id: pkg.id,
        },

        include: {
          packageType: true,

          fieldValues: {
            include: {
              field: true,
            },
          },
        },
      });
    });
  }

  async findOne(id: string) {
    const pkg = await this.prisma.vendorPackage.findUnique({
      where: {
        id,
      },

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

    if (!pkg) {
      throw new NotFoundException('Package not found');
    }

    return pkg;
  }

  async findByVendor(userId: string) {
    const vendor = await this.prisma.vendor.findFirst({
      where: {
        userId,
      },
    });

    if (!vendor) {
      throw new NotFoundException('Vendor not found');
    }

    return this.prisma.vendorPackage.findMany({
      where: {
        vendorId: vendor.id,
      },

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

  async update(id: string, userId: string, dto: UpdateVendorPackageDto) {
    const vendor = await this.prisma.vendor.findFirst({
      where: {
        userId,
      },
    });

    if (!vendor) {
      throw new NotFoundException('Vendor not found');
    }

    const pkg = await this.prisma.vendorPackage.findFirst({
      where: {
        id,
        vendorId: vendor.id,
      },
    });

    if (!pkg) {
      throw new ForbiddenException('You cannot update this package');
    }

    return this.prisma.vendorPackage.update({
      where: {
        id,
      },

      data: {
        title: dto.title,

        description: dto.description,

        basePrice: dto.basePrice,
      },
    });
  }

  async remove(id: string, userId: string) {
    const vendor = await this.prisma.vendor.findFirst({
      where: {
        userId,
      },
    });

    const pkg = await this.prisma.vendorPackage.findFirst({
      where: {
        id,
        vendorId: vendor?.id,
      },
    });

    if (!pkg) {
      throw new ForbiddenException('You cannot delete this package');
    }

    return this.prisma.vendorPackage.delete({
      where: {
        id,
      },
    });
  }
}

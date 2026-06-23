"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorPackagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const package_field_validator_1 = require("./helpers/package-field-validator");
let VendorPackagesService = class VendorPackagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        const vendor = await this.prisma.vendor.findFirst({
            where: { userId: userId },
        });
        if (!vendor)
            throw new common_1.NotFoundException('Vendor not found');
        if (vendor.status !== 'APPROVED') {
            throw new common_1.ForbiddenException('Vendor not approved');
        }
        const packageType = await this.prisma.packageType.findUnique({
            where: { id: dto.packageTypeId },
            include: {
                fieldSet: {
                    include: {
                        fields: {
                            include: {
                                field: {
                                    include: {
                                        options: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!packageType) {
            throw new common_1.NotFoundException('PackageType not found');
        }
        if (packageType.categoryId !== vendor.categoryId) {
            throw new common_1.BadRequestException('Invalid package type for this vendor category');
        }
        if (!packageType.fieldSet) {
            throw new common_1.BadRequestException('Package type has no fields configured');
        }
        const schemaFields = packageType.fieldSet.fields.map((f) => ({
            isRequired: f.isRequired,
            packageField: {
                id: f.field.id,
                label: f.field.label,
                name: f.field.name,
                dataType: f.field.dataType,
                options: (f.field.options || []).map((o) => ({
                    value: o.value,
                    label: o.label,
                })),
            },
        }));
        (0, package_field_validator_1.validatePackageFields)(schemaFields, dto.fields);
        return this.prisma.$transaction(async (tx) => {
            const pkg = await tx.vendorPackage.create({
                data: {
                    packageTypeId: dto.packageTypeId,
                    title: dto.title,
                    description: dto.description,
                    basePrice: dto.basePrice,
                },
            });
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
    async findOne(id) {
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
            throw new common_1.NotFoundException('Package not found');
        }
        return pkg;
    }
    async findByVendor(userId) {
        const vendor = await this.prisma.vendor.findFirst({
            where: {
                userId,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
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
    async update(id, userId, dto) {
        const vendor = await this.prisma.vendor.findFirst({
            where: {
                userId,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        const pkg = await this.prisma.vendorPackage.findFirst({
            where: {
                id,
                vendorId: vendor.id,
            },
        });
        if (!pkg) {
            throw new common_1.ForbiddenException('You cannot update this package');
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
    async remove(id, userId) {
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
            throw new common_1.ForbiddenException('You cannot delete this package');
        }
        return this.prisma.vendorPackage.delete({
            where: {
                id,
            },
        });
    }
};
exports.VendorPackagesService = VendorPackagesService;
exports.VendorPackagesService = VendorPackagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorPackagesService);
//# sourceMappingURL=vendor-packages.service.js.map
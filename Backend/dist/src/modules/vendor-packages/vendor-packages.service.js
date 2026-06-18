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
let VendorPackagesService = class VendorPackagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: { id: dto.vendorId },
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
                        fields: true,
                    },
                },
            },
        });
        if (!packageType) {
            throw new common_1.NotFoundException('PackageType not found');
        }
        return this.prisma.$transaction(async (tx) => {
            const pkg = await tx.vendorPackage.create({
                data: {
                    vendorId: dto.vendorId,
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
            return pkg;
        });
    }
    async findOne(id) {
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
    async findByVendor(vendorId) {
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
};
exports.VendorPackagesService = VendorPackagesService;
exports.VendorPackagesService = VendorPackagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorPackagesService);
//# sourceMappingURL=vendor-packages.service.js.map
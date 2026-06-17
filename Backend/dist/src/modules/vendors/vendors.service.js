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
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let VendorsService = class VendorsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        const category = await this.prisma.vendorCategory.findUnique({
            where: {
                id: dto.categoryId,
            },
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
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        if (!category.fieldSet) {
            throw new common_1.BadRequestException('Category field configuration missing');
        }
        const fieldMap = new Map();
        for (const fsField of category.fieldSet.fields) {
            fieldMap.set(fsField.field.id, fsField);
        }
        for (const input of dto.fields) {
            const fieldConfig = fieldMap.get(input.fieldId);
            if (!fieldConfig) {
                throw new common_1.BadRequestException(`Field ${input.fieldId} is not allowed for this category`);
            }
            if (fieldConfig.isRequired &&
                !input.value) {
                throw new common_1.BadRequestException(`${fieldConfig.field.name} is required`);
            }
            switch (fieldConfig.field.dataType) {
                case 'NUMBER':
                    if (isNaN(Number(input.value))) {
                        throw new common_1.BadRequestException(`${fieldConfig.field.name} must be a number`);
                    }
                    break;
                case 'SELECTION':
                    const validOption = fieldConfig.field.options.some(option => option.value === input.value);
                    if (!validOption) {
                        throw new common_1.BadRequestException(`Invalid option for ${fieldConfig.field.name}`);
                    }
                    break;
            }
        }
        return this.prisma.$transaction(async (tx) => {
            const vendor = await tx.vendor.create({
                data: {
                    userId: userId,
                    categoryId: dto.categoryId,
                    name: dto.name,
                    description: dto.description,
                },
            });
            await tx.vendorFieldValue.createMany({
                data: dto.fields.map((field) => ({
                    vendorId: vendor.id,
                    fieldId: field.fieldId,
                    value: field.value,
                })),
            });
            return vendor;
        });
    }
    async findAll() {
        return this.prisma.vendor.findMany({
            include: {
                category: true,
                fields: {
                    include: {
                        field: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }
    async findOne(id) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                fields: {
                    include: {
                        field: true,
                    }
                }
            }
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        return {
            ...vendor,
            fields: vendor.fields.map(item => ({
                fieldId: item.fieldId,
                name: item.field.name,
                label: item.field.label,
                dataType: item.field.dataType,
                value: item.value
            }))
        };
    }
    async updateStatus(id, dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        return this.prisma.vendor.update({
            where: {
                id,
            },
            data: {
                status: dto.status,
                statusReason: dto.reason,
            },
        });
    }
    async update(id, dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id,
            },
            include: {
                category: {
                    include: {
                        fieldSet: {
                            include: {
                                fields: {
                                    include: {
                                        field: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        return this.prisma.$transaction(async (tx) => {
            await tx.vendor.update({
                where: {
                    id,
                },
                data: {
                    name: dto.name,
                    description: dto.description,
                }
            });
            if (dto.fields) {
                for (const field of dto.fields) {
                    await tx.vendorFieldValue.upsert({
                        where: {
                            vendorId_fieldId: {
                                vendorId: id,
                                fieldId: field.fieldId,
                            }
                        },
                        update: {
                            value: field.value,
                        },
                        create: {
                            vendorId: id,
                            fieldId: field.fieldId,
                            value: field.value,
                        }
                    });
                }
            }
            return tx.vendor.findUnique({
                where: {
                    id,
                },
                include: {
                    fields: {
                        include: {
                            field: true,
                        }
                    }
                }
            });
        });
    }
    async search(dto) {
        const page = dto.page || 1;
        const limit = dto.limit || 10;
        const skip = (page - 1) * limit;
        const where = {
            status: 'APPROVED',
            isActive: true,
        };
        if (dto.categoryId) {
            where.categoryId = dto.categoryId;
        }
        if (dto.name) {
            where.name = {
                contains: dto.name,
                mode: 'insensitive',
            };
        }
        const [data, total] = await this.prisma.$transaction([
            this.prisma.vendor.findMany({
                where,
                skip,
                take: limit,
                include: {
                    category: true,
                    fields: {
                        include: {
                            field: true
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            this.prisma.vendor.count({
                where
            })
        ]);
        return {
            data,
            page,
            limit,
            total
        };
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map
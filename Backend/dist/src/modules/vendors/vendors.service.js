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
            if (fieldConfig.isRequired && !input.value) {
                throw new common_1.BadRequestException(`${fieldConfig.field.name} is required`);
            }
            switch (fieldConfig.field.dataType) {
                case 'NUMBER':
                    if (isNaN(Number(input.value))) {
                        throw new common_1.BadRequestException(`${fieldConfig.field.name} must be a number`);
                    }
                    break;
                case 'SELECTION':
                    const validOption = fieldConfig.field.options.some((option) => option.value === input.value);
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
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
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
                },
                media: true,
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
                fields: {
                    include: {
                        field: true,
                    },
                },
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        const activeFieldSet = vendor.fieldSet
            ? vendor.fieldSet
            : vendor.category.fieldSet;
        return {
            id: vendor.id,
            name: vendor.name,
            description: vendor.description,
            category: vendor.category.name,
            fields: activeFieldSet.fields,
            values: vendor.fields,
        };
    }
    async updateStatus(id, dto, adminId) {
        return this.prisma.$transaction(async (tx) => {
            const vendor = await tx.vendor.findUnique({
                where: {
                    id,
                },
            });
            if (!vendor) {
                throw new common_1.NotFoundException('Vendor not found');
            }
            const updatedVendor = await tx.vendor.update({
                where: {
                    id,
                },
                data: {
                    status: dto.status,
                },
            });
            await tx.vendorStatusHistory.create({
                data: {
                    vendorId: id,
                    previousStatus: vendor.status,
                    newStatus: dto.status,
                    reason: dto.reason,
                    changedBy: adminId,
                },
            });
            return updatedVendor;
        });
    }
    async getStatusHistory(id) {
        return this.prisma.vendorStatusHistory.findMany({
            where: {
                vendorId: id,
            },
            orderBy: {
                changedAt: 'desc',
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
                                        field: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
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
                },
            });
            if (dto.fields) {
                for (const field of dto.fields) {
                    await tx.vendorFieldValue.upsert({
                        where: {
                            vendorId_fieldId: {
                                vendorId: id,
                                fieldId: field.fieldId,
                            },
                        },
                        update: {
                            value: field.value,
                        },
                        create: {
                            vendorId: id,
                            fieldId: field.fieldId,
                            value: field.value,
                        },
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
                        },
                    },
                },
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
        if (dto.fields && dto.fields.length > 0) {
            where.fields = {
                some: {
                    OR: dto.fields.map((field) => ({
                        fieldId: field.fieldId,
                        value: field.value,
                    })),
                },
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
                            field: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            }),
            this.prisma.vendor.count({
                where,
            }),
        ]);
        return {
            data,
            page,
            limit,
            total,
        };
    }
    async addCustomField(vendorId, dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id: vendorId,
            },
            include: {
                category: {
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
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        return this.prisma.$transaction(async (tx) => {
            let customFieldSetId = vendor.fieldSetId;
            if (!customFieldSetId) {
                const newFieldSet = await tx.fieldSet.create({
                    data: {
                        name: `${vendor.name} Custom Fields`,
                        description: 'Vendor customized fields',
                        isCustom: true,
                    },
                });
                customFieldSetId = newFieldSet.id;
                const defaultFields = vendor.category.fieldSet.fields;
                for (const item of defaultFields) {
                    await tx.fieldSetField.create({
                        data: {
                            fieldSetId: customFieldSetId,
                            fieldId: item.fieldId,
                            displayOrder: item.displayOrder,
                            isRequired: item.isRequired,
                            readOnly: item.readOnly,
                        },
                    });
                }
                await tx.vendor.update({
                    where: {
                        id: vendorId,
                    },
                    data: {
                        fieldSetId: customFieldSetId,
                    },
                });
            }
            const field = await tx.field.create({
                data: {
                    name: dto.name,
                    label: dto.label,
                    dataType: dto.dataType,
                    placeholder: dto.placeholder,
                    helpText: dto.helpText,
                    defaultValue: dto.defaultValue,
                },
            });
            await tx.fieldSetField.create({
                data: {
                    fieldSetId: customFieldSetId,
                    fieldId: field.id,
                    displayOrder: 999,
                    isRequired: false,
                    readOnly: false,
                },
            });
            return field;
        });
    }
    async updateCustomField(vendorId, fieldId, dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id: vendorId,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        if (!vendor.fieldSetId) {
            throw new common_1.NotFoundException('Vendor does not have custom fields');
        }
        const fieldSetField = await this.prisma.fieldSetField.findFirst({
            where: {
                fieldSetId: vendor.fieldSetId,
                fieldId,
            },
        });
        if (!fieldSetField) {
            throw new common_1.NotFoundException('Custom field not found');
        }
        return this.prisma.field.update({
            where: {
                id: fieldId,
            },
            data: {
                ...dto,
            },
        });
    }
    async deleteCustomField(vendorId, fieldId) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id: vendorId,
            },
        });
        if (!vendor?.fieldSetId) {
            throw new common_1.NotFoundException('Custom FieldSet not found');
        }
        await this.prisma.fieldSetField.delete({
            where: {
                fieldSetId_fieldId: {
                    fieldSetId: vendor.fieldSetId,
                    fieldId,
                },
            },
        });
        const usage = await this.prisma.fieldSetField.count({
            where: {
                fieldId,
            },
        });
        if (usage === 0) {
            await this.prisma.field.delete({
                where: {
                    id: fieldId,
                },
            });
        }
        return {
            message: 'Field deleted',
        };
    }
    async updateFieldOrder(vendorId, fieldId, order) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id: vendorId,
            },
        });
        if (!vendor?.fieldSetId) {
            throw new common_1.NotFoundException();
        }
        return this.prisma.fieldSetField.update({
            where: {
                fieldSetId_fieldId: { fieldSetId: vendor.fieldSetId, fieldId },
            },
            data: {
                displayOrder: order,
            },
        });
    }
    async addMedia(vendorId, dto) {
        const vendor = await this.prisma.vendor.findUnique({
            where: {
                id: vendorId,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor not found');
        }
        return this.prisma.vendorMedia.create({
            data: {
                vendorId,
                type: dto.type,
                url: dto.url,
                fileName: dto.fileName,
            },
        });
    }
    async deleteMedia(id) {
        return this.prisma.vendorMedia.delete({
            where: {
                id,
            },
        });
    }
    async createReview(vendorId, userId, dto) {
        return this.prisma.$transaction(async (tx) => {
            const review = await tx.vendorReview.create({
                data: {
                    vendorId,
                    userId,
                    rating: dto.rating,
                    comment: dto.comment,
                },
            });
            const stats = await tx.vendorReview.aggregate({
                where: { vendorId },
                _avg: { rating: true },
                _count: { rating: true },
            });
            await tx.vendor.update({
                where: { id: vendorId },
                data: {
                    averageRating: stats._avg.rating || 0,
                    reviewCount: stats._count.rating,
                },
            });
            return review;
        });
    }
    async getReviews(vendorId) {
        return this.prisma.vendorReview.findMany({
            where: { vendorId },
            include: {
                user: {
                    select: {
                        id: true,
                        full_name: true,
                        avatar: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map
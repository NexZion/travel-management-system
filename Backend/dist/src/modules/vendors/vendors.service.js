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
        return this.prisma.vendor.create({
            data: {
                user: {
                    connect: {
                        id: userId,
                    }
                },
                category: {
                    connect: {
                        id: dto.categoryId
                    }
                },
                name: dto.name,
                description: dto.description,
                fields: {
                    create: dto.fields.map(field => ({
                        field: {
                            connect: {
                                id: field.fieldId
                            }
                        },
                        value: field.value
                    }))
                }
            },
            include: {
                fields: true
            }
        });
    }
    async findAll() {
        return this.prisma.vendor.findMany({
            include: {
                category: true,
                user: {
                    select: {
                        id: true,
                        full_name: true,
                        email: true,
                    }
                },
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
                user: {
                    select: {
                        id: true,
                        full_name: true,
                        email: true,
                    }
                },
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
        return vendor;
    }
    async update(id, dto) {
        return this.prisma.vendor.update({
            where: {
                id,
            },
            data: {
                ...dto,
            }
        });
    }
    async updateStatus(id, status) {
        return this.prisma.vendor.update({
            where: {
                id,
            },
            data: {
                status,
            }
        });
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map
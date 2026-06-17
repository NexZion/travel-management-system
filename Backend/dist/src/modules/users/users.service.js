"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(userId) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
                is_verified: true,
                status: true,
                created_at: true,
            }
        });
    }
    async updateProfile(userId, dto) {
        return this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                ...dto,
            },
            select: {
                id: true,
                full_name: true,
                email: true,
                phone: true,
                avatar: true,
            }
        });
    }
    async changePassword(userId, dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const passwordMatch = await bcrypt.compare(dto.currentPassword, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Current password is incorrect');
        }
        const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
        return this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashedPassword,
            },
            select: {
                id: true,
                email: true,
                full_name: true,
            }
        });
    }
    async updateStatus(id, status) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                status,
            },
            select: {
                id: true,
                full_name: true,
                email: true,
                status: true,
            }
        });
    }
    async findAll(filters) {
        const { search, role, status, page = 1, limit = 10, } = filters;
        const skip = (page - 1) * limit;
        const users = await this.prisma.user.findMany({
            where: {
                ...(status && { status }),
                ...(search && {
                    OR: [
                        {
                            full_name: {
                                contains: search,
                                mode: 'insensitive',
                            },
                        },
                        {
                            email: {
                                contains: search,
                                mode: 'insensitive',
                            },
                        },
                    ],
                }),
                ...(role && {
                    roles: {
                        some: {
                            role: {
                                name: role,
                            },
                        },
                    },
                }),
            },
            include: {
                roles: {
                    include: {
                        role: true,
                    },
                },
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc',
            },
        });
        const total = await this.prisma.user.count();
        return {
            data: users,
            page,
            limit,
            total,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map
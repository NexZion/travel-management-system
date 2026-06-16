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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const password_util_1 = require("./utils/password.util");
const token_service_1 = require("./token.service");
const crypto_1 = require("crypto");
const email_util_1 = require("./utils/email.util");
const audit_service_1 = require("../../common/services/audit.service");
let AuthService = class AuthService {
    prisma;
    tokenService;
    auditService;
    constructor(prisma, tokenService, auditService) {
        this.prisma = prisma;
        this.tokenService = tokenService;
        this.auditService = auditService;
    }
    async register(dto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const hashedPassword = await password_util_1.PasswordUtil.hashPassword(dto.password);
        const userRole = await this.prisma.role.findUnique({
            where: {
                name: 'USER',
            },
        });
        if (!userRole) {
            throw new Error('USER role not found');
        }
        const user = await this.prisma.user.create({
            data: {
                full_name: dto.full_name,
                email: dto.email,
                phone: dto.phone,
                password: hashedPassword,
            },
        });
        await this.sendVerification(user);
        const accessToken = this.tokenService.generateAccessToken(user);
        const refresh_token = this.tokenService.generateRefreshToken(user);
        await this.prisma.refreshToken.create({
            data: {
                token: refresh_token,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });
        await this.auditService.log({
            action: 'USER_REGISTER',
            userId: user.id,
        });
        return {
            access_token: accessToken,
            refresh_token: refresh_token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                phone: user.phone,
            },
        };
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.is_verified) {
            throw new common_1.UnauthorizedException('Please verify your email first');
        }
        const isPasswordValid = await password_util_1.PasswordUtil.comparePasswords(dto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accessToken = this.tokenService.generateAccessToken(user);
        const refresh_token = this.tokenService.generateRefreshToken(user);
        await this.prisma.refreshToken.create({
            data: {
                token: refresh_token,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });
        await this.auditService.log({
            action: 'USER_LOGIN',
            userId: user.id,
        });
        return {
            access_token: accessToken,
            refresh_token: refresh_token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
            },
        };
    }
    async refresh(token) {
        const stored = await this.prisma.refreshToken.findUnique({
            where: { token },
        });
        if (!stored || stored.revoked) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: stored.userId },
        });
        const access_token = this.tokenService.generateAccessToken(user);
        return { access_token };
    }
    async sendVerification(user) {
        const token = (0, crypto_1.randomUUID)();
        await this.prisma.emailVerification.create({
            data: {
                token,
                userId: user.id,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            },
        });
        email_util_1.EmailUtil.sendVerificationEmail(user.email, token);
    }
    async verifyEmail(token) {
        const record = await this.prisma.emailVerification.findUnique({
            where: { token },
        });
        if (!record || record.verified) {
            throw new common_1.BadRequestException('Invalid token');
        }
        await this.prisma.user.update({
            where: { id: record.userId },
            data: { is_verified: true },
        });
        await this.prisma.emailVerification.update({
            where: { token },
            data: { verified: true },
        });
        return { message: 'Email verified successfully' };
    }
    async forgotPassword(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            return {
                message: 'If account exists, reset link sent',
            };
        }
        const token = (0, crypto_1.randomUUID)();
        await this.prisma.passwordReset.create({
            data: {
                email: user.email,
                token,
                expiresAt: new Date(Date.now() + 60 * 60 * 1000),
            },
        });
        console.log('RESET TOKEN:', token);
        return {
            message: 'Password reset link sent',
        };
    }
    async resetPassword(dto) {
        const record = await this.prisma.passwordReset.findUnique({
            where: {
                token: dto.token,
            },
        });
        if (!record) {
            throw new common_1.BadRequestException('Invalid token');
        }
        if (record.used) {
            throw new common_1.BadRequestException('Token already used');
        }
        if (record.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Token expired');
        }
        const hashedPassword = await password_util_1.PasswordUtil.hashPassword(dto.newPassword);
        await this.prisma.user.update({
            where: {
                email: record.email,
            },
            data: {
                password: hashedPassword,
            },
        });
        await this.prisma.passwordReset.update({
            where: {
                token: dto.token,
            },
            data: {
                used: true,
            },
        });
        return {
            message: 'Password reset successful',
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        token_service_1.TokenService,
        audit_service_1.AuditService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
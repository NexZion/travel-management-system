import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenUtil } from './utils/token.util';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PasswordUtil } from './utils/password.util';
import { TokenService } from './token.service';
import { randomUUID } from 'crypto';
import { EmailUtil } from './utils/email.util';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuditService } from 'src/common/services/audit.service';

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private tokenService: TokenService,
    private auditService: AuditService,
  ) {}

  async register(dto: RegisterDto) {
  
      // 1. Check if user exists
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
  
      if (existingUser) {
        throw new BadRequestException('Email already exists');
      }
  
      // 2. Hash password
      const hashedPassword = await PasswordUtil.hashPassword(dto.password);
  
      const userRole = await this.prisma.role.findUnique({
        where: {
          name: 'USER',
        },
      });

      if (!userRole) {
        throw new Error('USER role not found');
      }

      // 3. Create user
      const user = await this.prisma.user.create({
        data: {
          full_name: dto.full_name,
          email: dto.email,
          phone: dto.phone,
          password: hashedPassword,
        },
      });

      await this.sendVerification(user);
  
      // 4. Create JWT
      const accessToken =
        this.tokenService.generateAccessToken(user);
        
      const refresh_token =
      this.tokenService.generateRefreshToken(user);

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
  
      // 5. Return response
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

  async login(dto: LoginDto) {

    // 1. Find user
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // 2. User not found
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.is_verified) {
    throw new UnauthorizedException('Please verify your email first');
  }

    // 3. Compare passwords
    const isPasswordValid =
      await PasswordUtil.comparePasswords(
        dto.password,
        user.password,
      );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 4. Generate token
    const accessToken =
      this.tokenService.generateAccessToken(user);
      
    const refresh_token =
    this.tokenService.generateRefreshToken(user);

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

    // 5. Return response
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

  async refresh(token: string) {

    const stored = await this.prisma.refreshToken.findUnique({
      where: { token },
    });

    if (!stored || stored.revoked) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: stored.userId },
    });

    const access_token =
      this.tokenService.generateAccessToken(user);

    return { access_token };
  }

  async sendVerification(user: any) {

    const token = randomUUID();

    await this.prisma.emailVerification.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    EmailUtil.sendVerificationEmail(user.email, token);
  }

  async verifyEmail(token: string) {

    const record = await this.prisma.emailVerification.findUnique({
      where: { token },
    });

    if (!record || record.verified) {
      throw new BadRequestException('Invalid token');
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

  async forgotPassword(dto: ForgotPasswordDto) {

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      return {
        message: 'If account exists, reset link sent',
      };
    }

    const token = randomUUID();

    await this.prisma.passwordReset.create({
      data: {
        email: user.email,
        token,
        expiresAt: new Date(
          Date.now() + 60 * 60 * 1000,
        ),
      },
    });

    console.log('RESET TOKEN:', token);

    return {
      message: 'Password reset link sent',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {

    const record =
      await this.prisma.passwordReset.findUnique({
        where: {
          token: dto.token,
        },
      });

    if (!record) {
      throw new BadRequestException(
        'Invalid token',
      );
    }

    if (record.used) {
      throw new BadRequestException(
        'Token already used',
      );
    }

    if (record.expiresAt < new Date()) {
      throw new BadRequestException(
        'Token expired',
      );
    }

    const hashedPassword =
      await PasswordUtil.hashPassword(
        dto.newPassword,
      );

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
}
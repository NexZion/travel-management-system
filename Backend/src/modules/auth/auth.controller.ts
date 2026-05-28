import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { Throttle } from '@nestjs/throttler';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private prisma: PrismaService
  ) {}

  @Public()

  @Throttle({
    default: {
      limit: 5,
      ttl: 60000,
    },
  })

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('refresh')
  refresh(@Body() body: { refresh_token: string }) {
    return this.authService.refresh(body.refresh_token);
  } 

  @Post('logout')
  async logout(@Body() body: { refresh_token: string }) {

    await this.prisma.refreshToken.update({
      where: { token: body.refresh_token },
      data: { revoked: true },
    });

    return { message: 'Logged out successfully' };
  }

  @Post('verify-email')
  verifyEmail(@Body() body: { token: string }) {
    return this.authService.verifyEmail(body.token);
  }

  @Post('forgot-password')
  forgotPassword(
    @Body() dto: ForgotPasswordDto,
  ) {
    return this.authService.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(
    @Body() dto: ResetPasswordDto,
  ) {
    return this.authService.resetPassword(dto);
  }
}
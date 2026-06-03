import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { PasswordUtil } from './utils/password.util';
import { TokenUtil } from './utils/token.util';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) {}

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

    // 3. Create user
    const user = await this.prisma.user.create({
      data: {
        full_name: dto.full_name,
        email: dto.email,
        phone: dto.phone,
        password: hashedPassword,
      },
    });

    // 4. Create JWT
    const token = TokenUtil.generateAccessToken(
      {} as any, // temporary (we will fix JwtService injection next step)
      {
        sub: user.id,
        email: user.email,
      },
    );

    // 5. Return response
    return {
      user,
      access_token: token,
    };
  }
}
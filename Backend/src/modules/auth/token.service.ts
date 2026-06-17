import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  generateAccessToken(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      permissions: user.permissions || [],
    };

    return this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
  }

  generateRefreshToken(user: any) {
  return this.jwtService.sign(
    {
      sub: user.id,
    },
    {
      expiresIn: '7d',
      secret: process.env.JWT_REFRESH_SECRET,
    },
  );
}
}
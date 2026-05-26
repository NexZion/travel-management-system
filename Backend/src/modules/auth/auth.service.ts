import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenUtil } from './utils/token.util';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    const token = TokenUtil.generateAccessToken(
      this.jwtService,
      {
        sub: user.id,
        email: user.email,
      },
    );

    return {
      access_token: token,
    };
  }
}
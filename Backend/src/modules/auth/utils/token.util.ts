import { JwtService } from '@nestjs/jwt';

export class TokenUtil {

  static generateAccessToken(
    jwtService: JwtService,
    payload: any,
  ) {

    return jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });
  }
}
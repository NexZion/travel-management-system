import { Response } from 'express';

export class CookieUtil {

  static setRefreshTokenCookie(
    response: Response,
    token: string,
  ) {

    response.cookie('refreshToken', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }

  static clearRefreshTokenCookie(
    response: Response,
  ) {

    response.clearCookie('refreshToken');
  }
}
import { Response } from 'express';
export declare class CookieUtil {
    static setRefreshTokenCookie(response: Response, token: string): void;
    static clearRefreshTokenCookie(response: Response): void;
}

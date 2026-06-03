"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieUtil = void 0;
class CookieUtil {
    static setRefreshTokenCookie(response, token) {
        response.cookie('refreshToken', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
    }
    static clearRefreshTokenCookie(response) {
        response.clearCookie('refreshToken');
    }
}
exports.CookieUtil = CookieUtil;
//# sourceMappingURL=cookie.util.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUtil = void 0;
class TokenUtil {
    static generateAccessToken(jwtService, payload) {
        return jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1d',
        });
    }
}
exports.TokenUtil = TokenUtil;
//# sourceMappingURL=token.util.js.map
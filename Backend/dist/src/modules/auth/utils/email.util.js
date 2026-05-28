"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailUtil = void 0;
class EmailUtil {
    static sendVerificationEmail(email, token) {
        const link = `http://localhost:3000/auth/verify-email?token=${token}`;
        console.log('📧 EMAIL SENT');
        console.log('To:', email);
        console.log('Verification Link:', link);
    }
}
exports.EmailUtil = EmailUtil;
//# sourceMappingURL=email.util.js.map
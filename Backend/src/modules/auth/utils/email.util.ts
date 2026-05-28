export class EmailUtil {

  static sendVerificationEmail(email: string, token: string) {

    const link = `http://localhost:3000/auth/verify-email?token=${token}`;

    console.log('📧 EMAIL SENT');
    console.log('To:', email);
    console.log('Verification Link:', link);
  }
}
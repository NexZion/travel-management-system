import * as bcrypt from 'bcrypt';

export class PasswordUtil {

  static async hashPassword(password: string) {

    return bcrypt.hash(password, 10);
  }

  static async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ) {

    return bcrypt.compare(
      plainPassword,
      hashedPassword,
    );
  }
}
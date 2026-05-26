export declare class PasswordUtil {
    static hashPassword(password: string): Promise<string>;
    static comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>;
}

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from "../../database/prisma/prisma.service";
import { TokenService } from './token.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuditService } from "../../common/services/audit.service";
export declare class AuthService {
    private prisma;
    private tokenService;
    private auditService;
    constructor(prisma: PrismaService, tokenService: TokenService, auditService: AuditService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        refresh_token: string;
        user: {
            id: string;
            full_name: string;
            email: string;
            phone: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
        user: {
            id: string;
            full_name: string;
            email: string;
        };
    }>;
    refresh(token: string): Promise<{
        access_token: string;
    }>;
    sendVerification(user: any): Promise<void>;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
}

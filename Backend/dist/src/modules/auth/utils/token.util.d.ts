import { JwtService } from '@nestjs/jwt';
export declare class TokenUtil {
    static generateAccessToken(jwtService: JwtService, payload: any): string;
}

import { JwtService } from '@nestjs/jwt';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateAccessToken(user: any): string;
    generateRefreshToken(user: any): string;
}

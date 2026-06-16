import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService, 
    private reflector: Reflector,) {}

  canActivate(context: ExecutionContext): boolean {

    const isPublic =
      this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [
          context.getHandler(),
          context.getClass(),
        ],
      );

    if (isPublic) {
      return true;
    }

    const request =
      context.switchToHttp().getRequest();

    const authHeader =
      request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException(
        'No token provided',
      );
    }

    const token =
      authHeader.split(' ')[1];

    try {

      const payload =
        this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });

      request.user = {
        ...payload,
        id: payload.sub ?? payload.id,
        sub: payload.sub ?? payload.id,
      };

      return true;

    } catch {

      throw new UnauthorizedException(
        'Invalid token',
      );
    }
  
    
  }
}
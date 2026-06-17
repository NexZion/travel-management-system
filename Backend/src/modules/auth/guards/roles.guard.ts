import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user) {
      throw new ForbiddenException('No user found');
    }

    const userRoles = await this.prisma.userRole.findMany({

    where:{
      userId:user.id,
    },


    include:{
      role:true,
    },

  });



  const roleNames =
  userRoles.map(
    (item)=>item.role.name
  );



  const hasRole =
  requiredRoles.some(
    (role)=>
      roleNames.includes(role)
  );



  if(!hasRole){

    throw new ForbiddenException(
      'Access denied'
    );

  }

    return true;
  }
}
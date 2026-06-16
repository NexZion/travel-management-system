import { Injectable, BadRequestException, NotFoundException, } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto, } from './dto/change-password.dto';
import { UserStatus } from './dto/update-user-status.dto';
import { GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UsersService {

    constructor( private prisma: PrismaService,) {}

    async getProfile(userId:string){

        return this.prisma.user.findUnique({

            where:{
                id:userId,
            },

            select:{
                id:true,
                full_name:true,
                email:true,
                phone:true,
                avatar:true,
                is_verified:true,
                status:true,
                created_at:true,
            }
        });
    }

    async updateProfile( userId:string, dto:UpdateProfileDto){

        return this.prisma.user.update({

            where:{
                id:userId,
            },

            data:{
                ...dto,
            },

            select:{
                id:true,
                full_name:true,
                email:true,
                phone:true,
                avatar:true,
            }
        });
    }

    async changePassword( userId:string, dto:ChangePasswordDto, ){

        const user = await this.prisma.user.findUnique({
            where:{
                id:userId,
            },
        });

        if(!user){
            throw new BadRequestException(
            'User not found'
            );
        }

        const passwordMatch = await bcrypt.compare(
            dto.currentPassword,
            user.password
        );

        if(!passwordMatch){
            throw new BadRequestException(
            'Current password is incorrect'
            );
        }

        const hashedPassword = await bcrypt.hash(
            dto.newPassword,
            10
        );


        return this.prisma.user.update({
            where:{
                id:userId,
            },

            data:{
                password:hashedPassword,
            },

            select:{
                id:true,
                email:true,
                full_name:true,
            }
        });
    }

    async updateStatus( id:string, status:UserStatus, ){

        const user = await this.prisma.user.findUnique({
            where:{
                id,
            }
        });

        if(!user){
            throw new NotFoundException(
            'User not found'
            );
        }

        return this.prisma.user.update({
            where:{
                id,
            },

            data:{
                status,
            },

            select:{
                id:true,
                full_name:true,
                email:true,
                status:true,
            }
        });
    }

    async findAll(filters: GetUsersDto) {

        const {
            search,
            role,
            status,
            page = 1,
            limit = 10,
        } = filters;

        const skip = (page - 1) * limit;

        const users = await this.prisma.user.findMany({

            where: {
            ...(status && { status }),
            ...(search && {
                OR: [
                {
                    full_name: {
                    contains: search,
                    mode: 'insensitive',
                    },
                },
                {
                    email: {
                    contains: search,
                    mode: 'insensitive',
                    },
                },
                ],
                }),
                ...(role && {
                    roles: {
                    some: {
                        role: {
                        name: role,
                        },
                    },
                    },
                }),
            },

            include: {
                roles: {
                    include: {
                    role: true,
                    },
                },
            },

            skip,
            take: limit,

            orderBy: {
                created_at: 'desc',
            },

        });


        const total = await this.prisma.user.count();

        return {
            data: users,
            page,
            limit,
            total,
        };
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService, } from 'src/database/prisma/prisma.service';
import { VendorStatus } from '@prisma/client';
import { CreateVendorDto, } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';

@Injectable()
export class VendorsService {

    constructor( private readonly prisma: PrismaService, ){}

    async create( dto: CreateVendorDto, ){
        return this.prisma.vendor.create({
            
        data:{

            user:{
                connect:{
                id:dto.userId
                }
            },

            category:{
                connect:{
                id:dto.categoryId
                }
            },

            name:dto.name,

            description:dto.description,

            fields:{
                create:
                dto.fields.map(field=>({

                field:{
                connect:{
                    id:field.fieldId
                }
                },

                value:field.value

                }))
            }
        },

        include:{
            fields:true
        }
        });

    }

    async findAll() {

        return this.prisma.vendor.findMany({

            include: {
                category: true,
                user: {
                    select:{
                    id:true,
                    full_name:true,
                    email:true,
                    }
                },
                fields: {
                    include:{
                    field:true,
                    }
                }
            },

            orderBy:{
                createdAt:'desc'
            }
        });
    }

    async findOne(id:string){

        const vendor = await this.prisma.vendor.findUnique({
            where:{
                id,
            },
            include:{
                category:true,
                user:{
                    select:{
                        id:true,
                        full_name:true,
                        email:true,
                    }
                },
                fields:{
                    include:{
                        field:true,
                    }
                }
            }

        });

        if(!vendor){
            throw new NotFoundException( 'Vendor not found' );
        }

        return vendor;
    }

    async update( id:string,dto:UpdateVendorDto ){

        return this.prisma.vendor.update({

            where:{
                id,
            },

            data:{
                ...dto,
            }
        });
    }

    async updateStatus( id:string,status:VendorStatus ){

        return this.prisma.vendor.update({
            where:{
                id,
            },

            data:{
                status,
            }
        });
    }

}
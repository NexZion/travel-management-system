import { Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { PrismaService, } from 'src/database/prisma/prisma.service';
import { VendorStatus } from '@prisma/client';
import { CreateVendorDto, } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';
import { SearchVendorDto } from './dto/search-vendor.dto';

@Injectable()
export class VendorsService {

    constructor( private readonly prisma: PrismaService, ){}

    async create(dto: CreateVendorDto, userId: string) {

        const category =
            await this.prisma.vendorCategory.findUnique({
            where: {
                id: dto.categoryId,
            },
            include: {
                fieldSet: {
                    include: {
                        fields: {
                            include: {
                                field: {
                                    include: {
                                        options: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },

        });

        if (!category) {
            throw new NotFoundException(
                'Category not found',
            );
        }

        if (!category.fieldSet) {
            throw new BadRequestException(
                'Category field configuration missing',
            );
        }

        // Create field map
        const fieldMap = new Map();

        for (const fsField of category.fieldSet.fields) {
            fieldMap.set(
                fsField.field.id,
                fsField,
            );
        }

        // Validate fields
        for (const input of dto.fields) {
            const fieldConfig =
                fieldMap.get(input.fieldId);

            if (!fieldConfig) {
                throw new BadRequestException(
                    `Field ${input.fieldId} is not allowed for this category`,
                );
            }

            // Required validation
            if (
                fieldConfig.isRequired &&
                !input.value
            ) {

                throw new BadRequestException(
                    `${fieldConfig.field.name} is required`,
                );

            }

            // Data type validation
            switch(fieldConfig.field.dataType){
                case 'NUMBER':
                    if(isNaN(Number(input.value))){
                        throw new BadRequestException(
                            `${fieldConfig.field.name} must be a number`,
                        );
                    }
                    break;

                case 'SELECTION':
                    const validOption =
                        fieldConfig.field.options.some(
                            option =>
                            option.value === input.value,
                        );
                    if(!validOption){
                        throw new BadRequestException(
                            `Invalid option for ${fieldConfig.field.name}`,
                        );
                    }
                    break;
            }
        }

        // Save data safely
        return this.prisma.$transaction(async (tx)=>{
            const vendor =
                await tx.vendor.create({
                data: {
                    userId: userId,
                    categoryId:
                        dto.categoryId,
                    name:
                        dto.name,
                    description:
                        dto.description,
                },
            });

            await tx.vendorFieldValue.createMany({
                data:
                dto.fields.map((field)=>({
                    vendorId:
                        vendor.id,
                    fieldId:
                        field.fieldId,
                    value:
                        field.value,
                })),
            });

            return vendor;
        });
    }

    async findAll() {

        return this.prisma.vendor.findMany({

            include: {
                category: true,
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

        return {
            ...vendor,

            fields: vendor.fields.map(item=>({

                fieldId:item.fieldId,

                name:item.field.name,

                label:item.field.label,

                dataType:item.field.dataType,

                value:item.value

            }))
        };
    }

    async updateStatus( id:string, dto:UpdateVendorStatusDto){

        const vendor =
            await this.prisma.vendor.findUnique({

            where:{
                id,
            },

        });

        if(!vendor){

            throw new NotFoundException(
                'Vendor not found'
            );

        }

        return this.prisma.vendor.update({

            where:{
                id,
            },

            data:{
                status:dto.status,
                statusReason:dto.reason,
            },

        });

    }

    async update( id:string, dto:UpdateVendorDto ){

        const vendor = await this.prisma.vendor.findUnique({

            where:{
                id,
            },

            include:{
                category:{
                    include:{
                        fieldSet:{
                            include:{
                                fields:{
                                    include:{
                                        field:true
                                    }
                                }
                            }
                        }
                    }
                }
            }

        });


        if(!vendor){
            throw new NotFoundException(
                'Vendor not found'
            );
        }

        return this.prisma.$transaction(async(tx)=>{

            // update basic data
            await tx.vendor.update({

                where:{
                    id,
                },

                data:{
                    name:dto.name,
                    description:dto.description,
                }
            });

            // update dynamic fields
            if(dto.fields){
                for(const field of dto.fields){
                    await tx.vendorFieldValue.upsert({

                        where:{
                            vendorId_fieldId:{
                                vendorId:id,
                                fieldId:field.fieldId,
                            }
                        },

                        update:{
                            value:field.value,
                        },

                        create:{
                            vendorId:id,
                            fieldId:field.fieldId,
                            value:field.value,
                        }
                    });
                }
            }

            return tx.vendor.findUnique({
                where:{
                    id,
                },

                include:{
                    fields:{
                        include:{
                            field:true,
                        }
                    }
                }
            });
        });
    }

    async search(dto: SearchVendorDto){

        const page = dto.page || 1;
        const limit = dto.limit || 10;
        const skip = (page - 1) * limit;
        const where:any = {

            status:'APPROVED',
            isActive:true,

        };


        if(dto.categoryId){
            where.categoryId = dto.categoryId;
        }

        if(dto.name){
            where.name = {
                contains:dto.name,
                mode:'insensitive',
            };
        }

        if(dto.fields && dto.fields.length > 0){
            where.fields = {
                some:{
                    OR:
                    dto.fields.map(field=>({
                        fieldId:
                            field.fieldId,
                        value:
                            field.value,
                    }))
                }
            };
        }

        const [ data, total ] = await this.prisma.$transaction([

            this.prisma.vendor.findMany({

                where,
                skip,
                take:limit,
                include:{
                    category:true,
                    fields:{
                        include:{
                            field:true
                        }
                    }
                },
                orderBy:{
                    createdAt:'desc'
                }
            }),

            this.prisma.vendor.count({
                where
            })
        ]);

        return {
            data,
            page,
            limit,
            total
        };
    }
}
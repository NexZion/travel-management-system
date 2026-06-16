import { Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { PrismaService, } from 'src/database/prisma/prisma.service';
import { VendorStatus } from '@prisma/client';
import { CreateVendorDto, } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UpdateVendorStatusDto } from './dto/update-vendor-status.dto';

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

    async updateStatus( id:string, status:VendorStatus){

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
                status,
            },

        });

    }

    async update( id:string, dto:UpdateVendorDto ){

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
                name:dto.name,
                description:dto.description,
            }

        });

    }

}
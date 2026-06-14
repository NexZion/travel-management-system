import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateVendorCategoryDto } from './dto/create-vendor-category.dto';


@Injectable()
export class VendorCategoriesService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async create(
    dto: CreateVendorCategoryDto,
  ) {

    return this.prisma.vendorCategory.create({

      data: {

        name: dto.name,

        code: dto.code,

        description: dto.description,

        fieldSetId: dto.fieldSetId,

        isActive:
          dto.isActive ?? true,

      },

    });

  }



  async findAll(){

    return this.prisma.vendorCategory.findMany({

      where:{
        isActive:true,
      },

      include:{
        fieldSet:true,
      },

      orderBy:{
        createdAt:'desc',
      },

    });

  }



  async findOne(id:string){

    const category =
      await this.prisma.vendorCategory.findUnique({

        where:{
          id,
        },

        include:{
          fieldSet:true,
        },

      });


    if(!category){

      throw new NotFoundException(
        'Vendor category not found'
      );

    }


    return category;

  }

  async getForm(id: string) {

    const category =
        await this.prisma.vendorCategory.findUnique({
        where: {
            id,
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
                orderBy: {
                    displayOrder: 'asc',
                },
                },
            },
            },
        },
        });


    if (!category) {
        throw new NotFoundException(
        'Vendor category not found',
        );
    }


    return {
        category: category.name,

        fields:
        category.fieldSet.fields.map(
            (item) => ({

            id: item.field.id,

            name: item.field.name,

            label: item.field.label,

            type: item.field.dataType,

            required: item.isRequired,

            readOnly: item.readOnly,

            options:
                item.field.options.map(
                (option) => ({
                    label: option.label,
                    value: option.value,
                }),
                ),

            }),
        ),
    };

    }

}
import { IsOptional, IsString } from 'class-validator';

export class UpdateVendorDto {

    @IsOptional()
    @IsString()
    name!:string;


    @IsOptional()
    @IsString()
    description?:string;

}
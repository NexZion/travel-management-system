import { IsArray, IsOptional, IsString } from 'class-validator';


class UpdateVendorFieldDto {

    @IsString()
    fieldId!: string;

    @IsString()
    value!: string;
}


export class UpdateVendorDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    fields?: UpdateVendorFieldDto[];
}
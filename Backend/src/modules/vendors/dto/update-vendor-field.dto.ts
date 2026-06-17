import { IsOptional, IsString } from 'class-validator';

export class UpdateVendorFieldDto {

    @IsOptional()
    @IsString()
    label?: string;

    @IsOptional()
    @IsString()
    helpText?: string;

    @IsOptional()
    @IsString()
    placeholder?: string;

    @IsOptional()
    @IsString()
    defaultValue?: string;

}
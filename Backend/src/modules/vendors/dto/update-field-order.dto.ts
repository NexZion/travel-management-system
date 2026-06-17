import { IsInt } from 'class-validator';

export class UpdateFieldOrderDto{

    @IsInt()
    displayOrder!:number;

}
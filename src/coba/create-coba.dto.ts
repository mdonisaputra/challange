import { IsNotEmpty } from 'class-validator';

export class CreateCobaDTO{

    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty()
    moto : string;

    @IsNotEmpty()
    cv : string;

    gender;
}
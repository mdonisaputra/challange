import { IsEnum, IsNotEmpty } from 'class-validator';
import { CobaGender } from './coba.model';
 
export class UpdateCobaDto {
    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty()
    moto : string;

    @IsNotEmpty()
    cv : string;

    @IsEnum(CobaGender)
    gender : (CobaGender)
}

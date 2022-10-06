import { IsEnum } from "class-validator";
import { Coba, CobaGender } from "./coba.model";
 
export class UpdateCobaStatusDto {
    

    @IsEnum(CobaGender)
    status : CobaGender;
}

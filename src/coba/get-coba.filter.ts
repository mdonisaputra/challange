import { IsOptional, IsEnum, IsString } from "class-validator";
import { Coba, CobaGender } from "./coba.model";

export class GetCobaStatusFilterDto { //? optional (nullable)

    @IsOptional()
    @IsEnum(CobaGender)
    gender? : CobaGender;
    //fullname? : Coba;
    
    @IsOptional()
    @IsString()
    search? : string;
}
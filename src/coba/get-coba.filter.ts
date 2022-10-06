import { Coba, CobaGender } from "./coba.model";
import { IsOptional, IsEnum, IsString } from "class-validator";

export class GetCobaStatusFilterDto { //? optional (nullable)

    @IsOptional()
    @IsEnum(CobaGender)
    gender? : CobaGender;
    //fullname? : Coba;
    @IsOptional()
    @IsString()
    search? : string;
}
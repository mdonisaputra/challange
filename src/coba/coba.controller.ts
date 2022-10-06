import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { Coba, CobaGender } from './coba.model';
import { CobaService } from './coba.service';
import { CreateCobaDTO } from './create-coba.dto';
import {GetCobaStatusFilterDto} from './get-coba.filter';
import { UpdateCobaStatusDto } from './update-coba.dto'

@Controller('coba')
export class CobaController {
    constructor(private cobaService : CobaService){} // (1)

    //@Get() // (2)
    //getAllCoba() : Coba[] {
      //  return this.cobaService.getAllCoba();
    //}

    @Get()
    getCoba(@Query() filterDto : GetCobaStatusFilterDto) : Coba[]{
        if(Object.keys(filterDto).length){
            return this.cobaService.getCobaWithFilters(filterDto);
        } else {
            return this.cobaService.getAllCoba();
        }
    }  

    @Post() // (3)
    createCoba(@Body() createCobaDTO: CreateCobaDTO
    ) : Coba {
        
        return this.cobaService.createCoba(createCobaDTO);
    }

    @Get('/:id')
    getCobaById(@Param('id')
        id:string
    ) : Coba {
        return this.cobaService.getCobaById(id);
    }

    @Delete('/:id')
    deleteCoba(@Param('id') id:string) : void{
        return this.cobaService.deleteCoba(id);
    }

    @Patch('/:id')
    updateCoba(
        @Param('id') id:string, // Param mengambil id pada link
        @Body('fullname') fullname: string, //Body mengambil status pada Body / isi data
        @Body('moto') moto: string,
        @Body('cv') cv: string,
        @Body('gender') gender: Coba,
        ) : Coba {
        return this.cobaService.updateCoba(id,fullname,moto,cv,gender);
    }
}

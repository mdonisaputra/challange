import { Controller, Get, Post, Body } from '@nestjs/common';
import { Coba } from './coba.model';
import { CobaService } from './coba.service';

@Controller('coba')
export class CobaController {
    constructor(private cobaService : CobaService){} // (1)

    @Get() // (2)
    getAllCoba() : Coba[] {
        return this.cobaService.getAllCoba();
    }

    @Post() // (3)
    createCoba(
        @Body('fullname') fullname:string,
        @Body('moto') moto:string,
        @Body('cv') cv:string,
    ) : Coba {
        
        return this.cobaService.createCoba(fullname, moto,cv);

    }
}

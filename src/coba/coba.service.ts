import { Injectable } from '@nestjs/common';
import { Coba, CobaStatus } from './coba.model';
import { v4 as uuid} from 'uuid'

@Injectable()
export class CobaService {
    private coba : Coba[] = [] ; // (1) buat variabel coba membaca interface Coba di coba.model.ts

    getAllCoba(){ // (2)
        return this.coba; //ngereturn variabel coba
    }

    createCoba(fullname:string, moto:string, cv:string) : Coba { // (3)
        const cobas : Coba = {
            id:uuid(),
            fullname,
            moto,
            cv,
            status: CobaStatus.OPEN
        };
        this.coba.push(cobas);
        return cobas;
    }

}

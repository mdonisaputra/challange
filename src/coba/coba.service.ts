import { Injectable, NotFoundException } from '@nestjs/common';
import { Coba, CobaGender } from './coba.model';
import { v4 as uuid} from 'uuid';
import {GetCobaStatusFilterDto} from './get-coba.filter';


@Injectable()
export class CobaService {
    private coba : Coba[] = [] ; // (1) buat variabel coba membaca interface Coba di coba.model.ts

    //getAllCoba(){ // (2)
      //  return this.coba; //ngereturn variabel coba
    //}

    getAllCoba() : Coba []{
        return this.coba;
    }

    getCobaWithFilters(filterDto : GetCobaStatusFilterDto) : Coba []{ //filterDto = object
        const {gender, search} = filterDto; 
        //deklarasi sebuah array untuk menampung nilai temporary
        let coba = this.getAllCoba();

        //seleksi kondisi
        if(gender){
            coba = coba.filter((cobas) => cobas.gender === gender);
        }

        //seleksi search
        if(search){
            coba = coba.filter((cobas)=>{

                if(cobas.fullname.includes(search)){ // || cobas.moto.includes(search) || cobas.cv.includes(search)){
                    return true;
                }
            return false;    
            });
        }

        return coba;
    }

    createCoba(fullname:string, moto:string, cv:string) : Coba { // (3)
        const cobas : Coba = {
            id:uuid(),
            fullname,
            moto,
            cv,
            gender: CobaGender.OPEN
        };
        this.coba.push(cobas);
        return cobas;
    }

    getCobaById (id:string) : Coba{
        //return this.coba.find((cobas) => cobas.id === id);
        const found = this.coba.find((cobas)=> cobas.id === id); //buat method found
        if(!found){
            throw new NotFoundException('Task tidak ditemukan');
        }
 
        return found;
    }

    deleteCoba (id:string) : void{
        //this.coba = this.coba.filter((cobas)=> cobas.id !== id);
        const found = this.getCobaById(id);
        this.coba = this.coba.filter((cobas)=> cobas.id !== found.id);
    }

    updateCoba(id:string, fullname:string, moto:string, cv:string, gender: Coba) {
        const cobas = this.getCobaById(id);
        cobas.fullname = fullname;
        cobas.moto = moto;
        cobas.cv = cv;
        cobas.gender = gender;
        return cobas;
    }
}

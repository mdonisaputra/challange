export interface Coba {
    id: string;
    fullname: string;
    moto: string;
    cv: string;
    gender : CobaGender;
}

export enum CobaGender {
    PRIA = 'PRIA',
    WANITA = 'WANITA',
}
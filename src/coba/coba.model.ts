export interface Coba {
    id: string,
    fullname: string,
    moto: string,
    cv: string,
    status
}

export enum CobaStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = "DONE",
}
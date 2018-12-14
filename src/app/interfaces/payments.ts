export interface Bank{
    id:string,
    bank_name : '',
    iban : number,
    name : string,
    number : number,
    currency : string,
    fees : number
}

export interface Payments {
    uid : string,
    used_account : string,
    accounts : Array<Bank>
}

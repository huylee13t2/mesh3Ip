interface Product{
    price : number,
    quantity : number,
    description : string,
}

export interface Billing {
    id : string,
    uid:string,
    _number : string,
    total : string,
    date : string,
    status : string,
    company_email:string,
    company_name:string,
    products : Array<Product>
}

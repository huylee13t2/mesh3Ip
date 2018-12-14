

export class User {
  uid : string;
  name : string;
  email:string;
  logo:string;
  company_name:string;
  company_email:string;
  company_phone:string;
  fees_number:string;
  lang:string;

  constructor (){
    this.uid = '';
    this.name = '';
    this.email = '';
    this.logo = '';
    this.company_name = '';
    this.company_email = '';
    this.company_phone = '';
    this.fees_number = '';
    this.lang = '';
  }
}
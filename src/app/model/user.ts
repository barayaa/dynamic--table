export interface User {
    id:number;
    address:string;
    canDelete: string ;
    company: Company;
    email:string;
    name: string;
    phone: string;
    username: string;
    website: string;
}
export interface Company {
    name: string;
   
  }
export interface User {
    id:number;
    email:string;
    nom: string;
    telephone: string;
    prenom: string;
    rapports: Rapport;
 
}
export interface Rapport {
    type:string
    rapport: string
    date: string;
  }
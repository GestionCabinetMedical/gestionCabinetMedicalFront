import { Consultation } from "./consultation";

export class Medecin{
    idMedecin:number;
    nom:string;
    prenom:string;
    idFormule:string;
    adresseCabinet:string;
    specialite:string;
    identifiant:string;
    motDePasse:string;
    consultations : Array<Consultation>;

}

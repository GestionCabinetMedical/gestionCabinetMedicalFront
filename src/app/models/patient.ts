import { Reservation } from "./reservation";

export class Patient{
    idPatient:number;
    nom:string;
    prenom:string;
    adresse:string;
    numSecu:number;
    identifiant:string;
    motDePasse:string;
    reservations : Array<Reservation>;

}

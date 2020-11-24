import { ReservationService } from './../../../services/reservation.service';
import { Reservation } from './../../../models/reservation';
import { MedecinService } from './../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {

//objet pour recherche par specialite 
specialiteMedecin:String;
listeMedecinBySpecialite:Array<Medecin>;
showRechBySpec : boolean;
// objet pour recherch par nom
nomMedecin:String;
listeMedecinByNom:Array<Medecin>;
showRechByNom:boolean;
//objet pour création resa
newResa:Reservation;
//boolean pour alert success ou fail
AddResaSuccess:boolean;
AddResaFail:boolean;

  constructor(
    private serviceMedecin : MedecinService,
    private serviceReservation : ReservationService) 
    { }




  ngOnInit(): void { 
    this.specialiteMedecin = new String() ;
    this.nomMedecin = new String();
    this.newResa = new Reservation();
    this.AddResaSuccess = false;
    this.AddResaFail = false;
    this.showRechBySpec = false;
    this.showRechByNom = false;
  }



//recherche medecin par specialite
findMedecinBySpecialite(){
  
  // if error = false
  this.showRechBySpec = true;
}

findMedecinByNom(){

  //if error = false
  this.showRechByNom = true;

}

createReservation(){
  this.serviceReservation.create(this.newResa).subscribe(
    x => {
      if (!x.error) this.AddResaSuccess = true;
      else this.AddResaFail = true;
    }
  )
}


}

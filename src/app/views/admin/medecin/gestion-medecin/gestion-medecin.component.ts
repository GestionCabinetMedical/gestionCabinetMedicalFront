import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';
import { MedecinService } from 'app/services/medecin.service';

@Component({
  selector: 'app-gestion-medecin',
  templateUrl: './gestion-medecin.component.html',
  styleUrls: ['./gestion-medecin.component.css']
})
export class GestionMedecinComponent implements OnInit {

  
  
  show_add:boolean;
  show_liste : boolean;
  show_rech: boolean;


    //objet pour recherche par specialite 
    specialiteMedecin: String;
    listeMedecinBySpecialite: Array<Medecin>;
    showRechBySpec: boolean;
    // objet pour recherch par nom
    nomMedecin: String;
    listeMedecinByNom: Array<Medecin>;
    showRechByNom: boolean;

    //objet modif  et suppressionmedecin modal
    chosenMedecin: Medecin;
    alertSuccessUpdate2 : boolean;
    alertFailUpdate2 : boolean
    alertSuccessDelete2 : boolean;
    alertFailDelete2 : boolean;

  constructor(
    private serviceMedecin: MedecinService,) { }

  ngOnInit(): void {
    this.show_add = false;
    this.show_liste = false;
    this.show_rech = false;
    this.showRechBySpec = false;
    this.showRechByNom = false;
    this.alertSuccessUpdate2 = false;
    this.alertFailUpdate2 = false;
    this.alertSuccessDelete2 = false;
    this.alertFailDelete2 = false;

    this.specialiteMedecin = new String();
    this.nomMedecin = new String();
    this.chosenMedecin = new Medecin();
  }


    //recherche medecin par specialite
    findMedecinBySpecialite() {
      this.serviceMedecin.findBySpecialite(this.specialiteMedecin).subscribe(
        x => {
          if (!x.error) {
            this.listeMedecinBySpecialite = x.body;
            this.showRechBySpec = true;
            this.showRechByNom = false;
          }
          else this.listeMedecinBySpecialite = [];
        }
      )
    }
  
    findMedecinByNom() {
      this.serviceMedecin.findByNom(this.nomMedecin).subscribe(
        x => {
          if (!x.error) {
            this.listeMedecinByNom = x.body;
            this.showRechByNom = true;
            this.showRechBySpec = false;
          }
          else this.listeMedecinByNom = [];
        }
      )
    }

    //assigne un medecin à la variable selected pour modif
  assignMedecin(medecin: Medecin) {
    this.chosenMedecin = medecin;
  }

    update2() {
      this.serviceMedecin.update(this.chosenMedecin).subscribe(
        x => {
          if (!x.error) {
            this.alertSuccessUpdate2 = true;
            this.findMedecinBySpecialite();
            this.findMedecinByNom();
          }
          else this.alertFailUpdate2 = true;
        }
      )
    }
  
    deleteById2(id: number) {
      this.serviceMedecin.deleteById(id).subscribe(
        x => {
          if (!x.error) {
            this.alertSuccessDelete2 = true;
            this.findMedecinBySpecialite();
            this.findMedecinByNom();
          }
          else this.alertFailDelete2 = false;
        }
      )
      
    }


}

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

  constructor(
    private serviceMedecin: MedecinService,) { }

  ngOnInit(): void {
    this.show_add = false;
    this.show_liste = false;
    this.show_rech = false;

    this.specialiteMedecin = new String();
    this.nomMedecin = new String();
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
}

import { MedecinService } from './../../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  newMedecin: Medecin;
  alertSuccess: boolean;
  alertFail: boolean;
  
//retour medecin  crée
  freshmedecin: Medecin;

  constructor(private serviceMedecin: MedecinService) { }

  ngOnInit(): void {
    this.newMedecin = new Medecin();
    this.alertSuccess = false;
    this.alertFail = false;
  }

  create() {
    this.serviceMedecin.create(this.newMedecin).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccess = true;
        this.freshmedecin = x.body;
        }
        else this.alertFail = true;
      })
  }
}

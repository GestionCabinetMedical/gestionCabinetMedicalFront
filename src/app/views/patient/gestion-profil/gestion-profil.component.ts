import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.css']
})
export class GestionProfilComponent implements OnInit {

currentPatient:Patient;
identifiant: string;

alertModifSuccess:boolean;
alertModifFail: boolean;

alertDeleteSuccess: boolean;
alertDeleteFail: boolean;

  constructor(private servicePatient : PatientService) { }

  ngOnInit(): void {
    //attribuer patient avec local storage
    console.log(localStorage.getItem('connectedUser'));
    this.identifiant = localStorage.getItem('connectedUser');
    // this.findByIdentifiant();

    this.alertDeleteFail = false;
    this.alertDeleteSuccess = false;
    this.alertModifFail = false;
    this.alertModifSuccess = false;
  }

  findByIdentifiant(){
    this.servicePatient.findByIdentifiant(this.identifiant).subscribe(
    x => {
      if (!x.error) this.currentPatient = x.body;
      else console.log('errer find patient');
    }
      )
  }


  update(){
    this.servicePatient.update(this.currentPatient).subscribe(
      x => {
        if (!x.error) this.alertModifSuccess = true
        else  this.alertModifFail = true;
      }
    )
  }

  deleteById(){
    this.servicePatient.deleteById(this.currentPatient.idPatient).subscribe(
      x => {
        if (!x.error) this.alertDeleteSuccess = true;
        else this.alertDeleteFail = true;
      }
    )
  }

}

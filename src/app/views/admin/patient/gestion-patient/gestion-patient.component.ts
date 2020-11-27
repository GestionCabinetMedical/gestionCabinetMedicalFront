import { PatientService } from './../../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-gestion-patient',
  templateUrl: './gestion-patient.component.html',
  styleUrls: ['./gestion-patient.component.css']
})
export class GestionPatientComponent implements OnInit {

  show_add: boolean;
  show_liste: boolean;
  show_rech: boolean;

  //objet pour recherche par adresse 
  adressePatient: String;
  listePatientByAdresse: Array<Patient>;
  showRechByAdresse: boolean;

  // objet pour recherch par nom
  nomPatient: String;
  listePatientByNom: Array<Patient>;
  showRechByNom: boolean;

  //objet pour modif et suppression patient
  chosenPatient: Patient;
  alertSuccessUpdate2: boolean;
  alertFailUpdate2: boolean;
  alertSuccessDelete2: boolean;
  alertFailDelete2: boolean;

  constructor(private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.show_add = false;
    this.show_liste = false;
    this.show_rech = false;
    this.showRechByAdresse = false;
    this.showRechByNom = false;
    this.alertSuccessUpdate2 = false;
    this.alertFailUpdate2 = false;
    this.alertSuccessDelete2 = false;
    this.alertFailDelete2 = false;

    this.adressePatient = new String();
    this.nomPatient = new String();
    this.chosenPatient = new Patient();
  }

  findPatientByAdresse() {
    this.servicePatient.findByAdresse(this.adressePatient).subscribe(
      x => {
        if (!x.error) {
          this.showRechByAdresse = true;
          this.showRechByNom = false;
          this.listePatientByAdresse = x.body;
        }
      }
    )
  }

  findByPatientByNom() {
    this.servicePatient.findByNom(this.nomPatient).subscribe(
      x => {
        if (!x.error) {
          this.showRechByAdresse = false;
          this.showRechByNom = true;
          this.listePatientByNom = x.body;

        }
      }
    )
  }


  //assigne un patient à la variable selected pour modif
  assignPatient(patient: Patient) {
    this.chosenPatient = patient;
  }

  update2() {
    this.servicePatient.update(this.chosenPatient).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessUpdate2 = true;
          this.findPatientByAdresse();
          this.findByPatientByNom();
        }
        else this.alertFailUpdate2 = true;
      }
    )
  }

  deleteById2(id: number) {
    this.servicePatient.deleteById(id).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessDelete2 = true;
          this.findPatientByAdresse();
          this.findByPatientByNom();
        }
        else this.alertFailDelete2 = true;
      }
    )
  }

}

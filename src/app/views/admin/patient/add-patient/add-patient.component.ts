import { PatientService } from './../../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  newPatient: Patient;
  alertSuccess: boolean;
  alertFail: boolean;

  //retour du patient crée
  freshPatient: Patient;

  constructor(private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.newPatient = new Patient();
    this.alertSuccess = false;
    this.alertFail = false;
  }

  create() {
    console.log('nom du patient : '+this.newPatient.nom);
    this.servicePatient.create(this.newPatient).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccess = true;
    this.newPatient = new Patient();
    this.freshPatient = x.body;
        }
        else this.alertFail = true;
      })
  }


}

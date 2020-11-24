import { PatientService } from './../../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

  listePatients: Array<Patient>;
  selectedPatient = new Patient();
  alertSuccessUpdate: boolean;
  alertFailUpdate :boolean;
  alertSuccessDelete : boolean;
  alertFailDelete: boolean;

  constructor(private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.getAllPatient();
    this.alertSuccessUpdate = false;
    this.alertFailUpdate = false;
    this.alertSuccessDelete = false;
    this.alertFailDelete = false;
  }

  getAllPatient() {
    this.servicePatient.findAll().subscribe(
      x => {
        if (!x.error) this.listePatients = x.body;
        else this.listePatients = [];
      }
    )
  }

//assigne un patient à la variable selected pour modif
  assignedPatient(patient: Patient) {
    this.selectedPatient = patient;
  }

  update() {
    this.servicePatient.update(this.selectedPatient).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessUpdate = true;
          this.getAllPatient();
        }
        else this.alertFailUpdate = true;
      }
    )
  }

  deleteById(id: number) {
    this.servicePatient.deleteById(id).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessDelete = true;
          this.getAllPatient();
        }
        else this.alertFailDelete = true;
      }
    )
  }

}

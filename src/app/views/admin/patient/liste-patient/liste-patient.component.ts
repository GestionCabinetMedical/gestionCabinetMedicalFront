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
  selectedPatient: Patient;
  booleanModif: boolean;
  booleanDelete: boolean;

  constructor(private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.getAllPatient();
    this.booleanModif = false;
    this.booleanDelete = false;
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
          this.booleanModif = true;
          this.getAllPatient();
        }
        else this.booleanModif = false;
      }
    )
  }

  deleteById(id: number) {
    this.servicePatient.deleteById(id).subscribe(
      x => {
        if (!x.error) this.booleanDelete = true;
        else this.booleanDelete = false;
      }
    )
  }

}

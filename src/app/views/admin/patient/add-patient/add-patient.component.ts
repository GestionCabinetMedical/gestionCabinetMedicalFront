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
  booleanResponse: boolean;

  constructor(private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.newPatient = new Patient();
  }

  create() {
    this.servicePatient.create(this.newPatient).subscribe(
      x => {
        if (!x.error) this.booleanResponse = true;
        else this.booleanResponse = false;
      })
  }


}

import { MedecinService } from './../../services/medecin.service';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  medecin:Medecin;
  patient :Patient;

  showFormPatient:boolean;
  showFormMedecin:boolean;

  constructor(private servicePatient:PatientService,
    private serviceMedecin:MedecinService) { }

  ngOnInit(): void {
    this.patient=new Patient();
    this.medecin = new Medecin();

    this.showFormPatient = false;
    this.showFormMedecin = false;
  }

  //méthode de connexion pour patient
  connectPatient(){
    //appel méthode connection de service Patient
    //si success redigérer vers patient-home
  }

  //méthode de connection pour medecin
  connectMedecin(){
    //appel méthode connection de service Patient
    //si success redigérer vers medecin-home
  }
}

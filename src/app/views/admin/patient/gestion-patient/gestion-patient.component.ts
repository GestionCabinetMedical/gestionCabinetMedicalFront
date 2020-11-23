import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-patient',
  templateUrl: './gestion-patient.component.html',
  styleUrls: ['./gestion-patient.component.css']
})
export class GestionPatientComponent implements OnInit {

  show_add:boolean;
  show_liste : boolean;
  show_rech: boolean;

  constructor() { }

  ngOnInit(): void {
    this.show_add = false;
    this.show_liste = false;
    this.show_rech = false;
  
  }

}

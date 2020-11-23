import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-medecin',
  templateUrl: './gestion-medecin.component.html',
  styleUrls: ['./gestion-medecin.component.css']
})
export class GestionMedecinComponent implements OnInit {

  
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

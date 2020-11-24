import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-questionnaire',
  templateUrl: './gestion-questionnaire.component.html',
  styleUrls: ['./gestion-questionnaire.component.css']
})
export class GestionQuestionnaireComponent implements OnInit {

  show_add:boolean;
  show_liste : boolean;

  constructor() { }

  ngOnInit(): void {
    this.show_add = false;
    this.show_liste = false;
  }

}

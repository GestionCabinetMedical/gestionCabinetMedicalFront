import { QuestionnaireSatisfactionService } from './../../../services/questionnaire-satisfaction.service';
import { Component, OnInit } from '@angular/core';
import { QuestionnaireSatisfaction } from 'app/models/questionnaire-satis';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-remplir-questionnaire',
  templateUrl: './remplir-questionnaire.component.html',
  styleUrls: ['./remplir-questionnaire.component.css']
})
export class RemplirQuestionnaireComponent implements OnInit {

  constructor(private serviceQuestionnaire: QuestionnaireSatisfactionService) { }

  currentPatient: Patient;

  identifiant: string;

  allQuestionnaires: Array<QuestionnaireSatisfaction>;

  selectedQuestionnaire: QuestionnaireSatisfaction;

  alertSuccess: boolean;
  alertFail: boolean

  ngOnInit(): void {
    //attribuer patient avec local storage
    this.identifiant = localStorage.getItem('connectedUser');

    this.getAllQuestionnaire();
    this.selectedQuestionnaire = new QuestionnaireSatisfaction();
    this.alertSuccess = false;
    this.alertFail = false;
  }

  getAllQuestionnaire() {
    this.serviceQuestionnaire.findAllToFill().subscribe(
      x => {
        if (!x.error) this.allQuestionnaires = x.body;
      }
    )
  }

  selectQuestionnaire(questionnaire: QuestionnaireSatisfaction) {
    this.selectedQuestionnaire = questionnaire;
  }

  remplirQuestionnaire() {
    this.selectedQuestionnaire.status = true;
    this.selectedQuestionnaire.idQuestionnaire = null;
    //assigner l'id du patient
    // this.selectedQuestionnaire.idPatient = this.currentPatient.idPatient
    this.selectedQuestionnaire.listeQuestions.slice().forEach(
      x => {
        x.idQuestion = null;
      }
    );
    //assigner l'id de la consultation
    this.serviceQuestionnaire.create(this.selectedQuestionnaire).subscribe(
      x => {
        if (!x.error) this.alertSuccess = true;
        else this.alertFail = true;
      }
    )

  }

}

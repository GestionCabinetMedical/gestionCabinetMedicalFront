import { QuestionnaireSatisfactionService } from './../../../services/questionnaire-satisfaction.service';
import { Component, OnInit } from '@angular/core';
import { QuestionnaireSatisfaction } from 'app/models/questionnaire-satis';

@Component({
  selector: 'app-remplir-questionnaire',
  templateUrl: './remplir-questionnaire.component.html',
  styleUrls: ['./remplir-questionnaire.component.css']
})
export class RemplirQuestionnaireComponent implements OnInit {

  constructor(private serviceQuestionnaire: QuestionnaireSatisfactionService) { }

  allQuestionnaires: Array<QuestionnaireSatisfaction>;

  selectedQuestionnaire: QuestionnaireSatisfaction;

  alertSuccess:boolean;
  alertFail:boolean

  ngOnInit(): void {
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
    this.selectedQuestionnaire.status=true;
    this.selectedQuestionnaire.idQuestionnaire = null;
    this.selectedQuestionnaire.listeQuestions.slice().forEach( 
      x => {
       x.idQuestion = null;
      }
    );
    //assigner l'id du patient
    //assigner l'id de la consultation
    this.serviceQuestionnaire.create(this.selectedQuestionnaire).subscribe(
      x => {
        if (!x.error) this.alertSuccess = true;
        else this.alertFail = true;
      }
    )

  }

}

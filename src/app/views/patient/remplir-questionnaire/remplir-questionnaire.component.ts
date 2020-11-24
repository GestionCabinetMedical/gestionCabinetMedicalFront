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

  selectedQuestionnaire :QuestionnaireSatisfaction;

  ngOnInit(): void {
    this.getAllQuestionnaire();
    this.selectedQuestionnaire = new QuestionnaireSatisfaction();
  }

getAllQuestionnaire(){
  this.serviceQuestionnaire.findAll().subscribe(
    x => {
      if (!x.error) this.allQuestionnaires = x.body;
    }
  )
}

selectQuestionnaire(questionnaire: QuestionnaireSatisfaction){
  this.selectedQuestionnaire = questionnaire;
}

remplirQuestionnaire(){
  
}

}

import { QuestionnaireSatisfactionService } from './../../../../services/questionnaire-satisfaction.service';
import { QuestionnaireSatisfaction } from 'app/models/questionnaire-satis';
import { Component, OnInit } from '@angular/core';
import { QuestionReponse } from 'app/models/question-reponse';

@Component({
  selector: 'app-list-questionnaire',
  templateUrl: './list-questionnaire.component.html',
  styleUrls: ['./list-questionnaire.component.css']
})
export class ListQuestionnaireComponent implements OnInit {

  listeQuestionnaires: Array<QuestionnaireSatisfaction>;
  selectedQuestionnaire = new QuestionnaireSatisfaction();
  alertSuccessUpdate: boolean;
  alertFailUpdate: boolean;
  alertSuccessDelete: boolean;
  alertFailDelete: boolean;

  lambdaQuestion = new QuestionReponse();

  constructor(private serviceQuestionnaire: QuestionnaireSatisfactionService) { }

  ngOnInit(): void {
    this.findAll();
    this.alertSuccessUpdate = false;
    this.alertFailUpdate = false;
    this.alertSuccessDelete = false;
    this.alertFailDelete = false;
  }

  findAll() {
    this.serviceQuestionnaire.findAllToFill().subscribe(
      x => {
        if (!x.error) this.listeQuestionnaires = x.body;
        else this.listeQuestionnaires = [];
      }
    )
  }

  assignQuestionnaire(questionnaire: QuestionnaireSatisfaction) {
    this.selectedQuestionnaire = questionnaire;
  }

  increaseQuestionnaire(){
    this.lambdaQuestion= new QuestionReponse();
    this.selectedQuestionnaire.listeQuestions.push(this.lambdaQuestion);
  }

  update() {
    this.serviceQuestionnaire.update(this.selectedQuestionnaire).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessUpdate = true;
          this.findAll();
        }
        else this.alertFailUpdate = true;
      }
    )
  }

  delete(id: number) {
    this.serviceQuestionnaire.deleteById(id).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccessDelete = true;
          this.findAll();
        }
        else this.alertFailDelete = true;
      }
    )
  }

}

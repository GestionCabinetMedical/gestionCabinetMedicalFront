import { QuestionnaireSatisfactionService } from './../../../../services/questionnaire-satisfaction.service';
import { Component, OnInit } from '@angular/core';
import { QuestionReponse } from 'app/models/question-reponse';
import { QuestionnaireSatisfaction } from 'app/models/questionnaire-satis';

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.css']
})
export class AddQuestionnaireComponent implements OnInit {

  constructor(private serviceQuestionnaire: QuestionnaireSatisfactionService) { }

  newQuestionnaire: QuestionnaireSatisfaction;
  questions: Array<QuestionReponse>;

  alertSuccess: boolean;
  alertFail : boolean;

  firstQuestion = new QuestionReponse();
  lambdaQuestion: QuestionReponse;

  freshQuestionnaire:QuestionnaireSatisfaction;

  ngOnInit(): void {
    this.alertSuccess = false;
    this.alertFail = false;
    this.newQuestionnaire = new QuestionnaireSatisfaction();
    this.questions = new Array<QuestionReponse>();
    this.questions.push(this.firstQuestion);
  }

increaseQuestionnaire(){
  this.lambdaQuestion= new QuestionReponse();
  this.questions.push(this.lambdaQuestion);
}

  create() {
    this.newQuestionnaire.listeQuestions = this.questions;
    console.log("questionnaire à envoyé json : "+this.newQuestionnaire.listeQuestions);
    this.serviceQuestionnaire.create(this.newQuestionnaire).subscribe(
      x => {
        if (!x.error) {
          this.alertSuccess = true;
          this.freshQuestionnaire = x.body;
          this.newQuestionnaire = new QuestionnaireSatisfaction();
        }
        else this.alertFail=true;
      }
    )
  }

}

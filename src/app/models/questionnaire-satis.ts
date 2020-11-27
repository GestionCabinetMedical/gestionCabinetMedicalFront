import { QuestionReponse } from "./question-reponse";

export class QuestionnaireSatisfaction{
    idQuestionnaire:number;
    idPatient:number
    idConsultation:number;
    listeQuestions:Array<QuestionReponse>;
    nomQuestionnaire:string;
    status : boolean;
}
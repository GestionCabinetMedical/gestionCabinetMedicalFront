import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionnaireSatisfaction } from 'app/models/questionnaire-satis';
import { ResponseDto } from 'app/models/responseDto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireSatisfactionService {

  
  private URL = environment.baseUrl + 'gestion-admin/questionnaireSatisfaction';

  constructor(private http: HttpClient) { }

  
  create(questionnaire: QuestionnaireSatisfaction): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, questionnaire);
  }

  update(questionnaire: QuestionnaireSatisfaction): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, questionnaire);
  }

  deleteById(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + '/' + id);
  }

  findById(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/' + id);
  }

  findAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + '/all');
  }

}

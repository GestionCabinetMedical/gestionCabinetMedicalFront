import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation } from 'app/models/consultation';
import { ResponseDto } from 'app/models/responseDto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  
  private URL = environment.baseUrl + 'gestion-rdv/consultation';

  constructor(private http: HttpClient) { }

    
  create(consultation: Consultation): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, consultation);
  }

  update(consultation: Consultation): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, consultation);
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

  createConsultAndResa(consultation: Consultation): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL +'/addConsultAndResa',consultation);
  }

}

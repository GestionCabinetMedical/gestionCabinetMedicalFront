import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'app/models/patient';
import { ResponseDto } from 'app/models/responseDto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  
  private URL = environment.baseUrl + 'gestion-rdv/patient';

  constructor(private http: HttpClient) {}



    create(patient: Patient): Observable<ResponseDto> {
      return this.http.post<ResponseDto>(this.URL, patient);
    }
  
    update(patient: Patient): Observable<ResponseDto> {
      return this.http.put<ResponseDto>(this.URL, patient);
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

    connect(tableau:Array<string>):Observable<ResponseDto> {
      return this.http.post<ResponseDto>(this.URL,tableau);
    }

    findByIdentifiant(identifiant:String):Observable<ResponseDto>{
      return this.http.get<ResponseDto>(this.URL+'/identifiant?identifiant='+identifiant);
    }
  
}

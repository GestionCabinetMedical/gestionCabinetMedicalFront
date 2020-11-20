import { Formule } from './../models/formule';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from 'app/models/responseDto';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {

  
  private URL = environment.baseUrl +'gestion-admin/formule/';

  constructor(private http: HttpClient) { }

create(formule:Formule):Observable<ResponseDto> {
  return this.http.post<ResponseDto>(this.URL,formule);
}

update(formule:Formule):Observable<ResponseDto> {
  return this.http.put<ResponseDto>(this.URL, formule);
}

deleteById(id:number):Observable<ResponseDto> {
  return this.http.delete<ResponseDto>(this.URL+'/'+id);
}

findById(id:number):Observable<ResponseDto> {
  return this.http.get<ResponseDto>(this.URL+'/'+id);
}

findAll():Observable<ResponseDto> {
  return this.http.get<ResponseDto>(this.URL+'/all');
}

findBySpecialite(specialite:string):Observable<ResponseDto>{
  return this.http.get<ResponseDto>(this.URL+'/specialite?specialite='+specialite);
}

}

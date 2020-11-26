import { Reservation } from './../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medecin } from 'app/models/medecin';
import { ResponseDto } from 'app/models/responseDto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  
  private URL = environment.baseUrl + 'gestion-rdv/medecin';

  constructor(private http: HttpClient) { }

  create(medecin: Medecin): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, medecin);
  }

  update(medecin: Medecin): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, medecin);
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

  findByNom(nom:String):Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL+'/nom?nom='+nom);
  }

  findBySpecialite(specialite:String):Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL +'/specialite?specialite='+specialite);
  }

  consulterResa(identifiant:String):Observable<ResponseDto>{
    return this.http.get<ResponseDto>(this.URL +'/consulterResa?identifiant='+identifiant);
  }

  accepterResa(resa : Reservation):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(this.URL+'/confirmerRdv',resa);
  }

  consulterPlanning(identifiant:String):Observable<ResponseDto>{
    return this.http.get<ResponseDto>(this.URL +'/consulterPlanning?identifiant='+identifiant);
  }

  consulterPlanningByDate(identifiant:String, annee:number,mois:number,jour:number):Observable<ResponseDto>{
    return this.http.get<ResponseDto>(this.URL +'/consulterPlanning?identifiant='+identifiant+'&date='+annee+'-'+mois+'-'+jour);
  }
}

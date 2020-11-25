import { ConnectedUser } from './../models/connectedUser';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConnexionDto } from "app/models/connexionDto";
import { Medecin } from "app/models/medecin";
import { ResponseDto } from "app/models/responseDto";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Role } from 'app/enums/Role.enum';

@Injectable({
  providedIn: "root",
})
export class MedecinService {
  private URL = environment.baseUrl + "gestion-rdv/medecin";

  connectedUser: ConnectedUser;

  constructor(private http: HttpClient) {}

  create(medecin: Medecin): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, medecin);
  }

  update(medecin: Medecin): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, medecin);
  }

  deleteById(id: number): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(this.URL + "/" + id);
  }

  findById(id: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + "/" + id);
  }

  findAll(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.URL + "/all");
  }

  getIdentifiantAndMotDePasse(tableau: Array<string>): Observable<ConnexionDto> {
    return this.http.post<ConnexionDto>(this.URL + "/identifiant-mdp", tableau);
  }

  connect(connexionDto: ConnexionDto): boolean {
    let success = this.convert(connexionDto);
    if (success) {
      localStorage.setItem("token", connexionDto.token);
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
    }
    return success;
  }

  convert(connexionDto: ConnexionDto): boolean {
    this.connectedUser = new ConnectedUser();
    if (connexionDto.user != null) {
      this.connectedUser.identifiant = connexionDto.user.identifiant;
      this.connectedUser.motDePasse = connexionDto.user.motDePasse;
      this.connectedUser.role = Role.Medecin;
      return true;
    } else {
      return false;
    }
  }

  disconnect() {
    localStorage.clear();
    this.connectedUser = null;
  }

}

import { ConnexionDto } from 'app/models/connexionDto';
import { ResponseDto } from "./../models/responseDto";
import { Observable } from "rxjs";
import { Admin } from "./../models/admin";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { ConnectedUser } from 'app/models/connectedUser';
import { Role } from 'app/enums/Role.enum';

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private URL = environment.rdvUrl + "gestion-rdv/admin";
  
  connectedUser: ConnectedUser;

  constructor(private http: HttpClient) {}

  create(admin: Admin): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, admin);
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

  getIdentifiantAndMotDePasse(username: string, mdp: string): Observable<ConnexionDto> {
    return this.http.post<ConnexionDto>(this.URL + "/connexion", { username, mdp });
  }

  /* connect(connexionDto: ConnexionDto): boolean {
    let success = this.convert(connexionDto);
    if (success) {
      localStorage.setItem("token", connexionDto.token);
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
    }
    return success;
  } */

  /* convert(connexionDto: ConnexionDto): boolean {
    this.connectedUser = new ConnectedUser();
    if (connexionDto.user != null) {
      this.connectedUser.identifiant = connexionDto.user.identifiant;
      this.connectedUser.motDePasse = connexionDto.user.motDePasse;
      this.connectedUser.role = Role.Admin;
      return true;
    } else {
      return false;
    }
  } */

  disconnect() {
    localStorage.clear();
    this.connectedUser = null;
  }
}

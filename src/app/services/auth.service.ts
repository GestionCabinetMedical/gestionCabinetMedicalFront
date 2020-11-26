import { ResponseDto } from './../models/responseDto';
import { Role } from "./../enums/Role.enum";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { ConnectedUser } from "app/models/connectedUser";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private URL = environment.baseUrl + "gestion-rdv/session";

  constructor(private http: HttpClient) {}

  getConnectedUser(token: string): Observable<ConnectedUser> {
    return this.http.post<ConnectedUser>(this.URL + "/user", token);
  }

  getUserRole(token: string): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + "/role", token);
  }

  getUserIdentifiant(token: string): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + "/identifiant", token);
  }

  getUserMotDePasse(token: string): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL + "/mdp", token);
  }
}

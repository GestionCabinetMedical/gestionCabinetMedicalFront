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

  getUserRole(token: string): Observable<Role> {
    return this.http.post<Role>(this.URL + "/role", token);
  }

  getUserIdentifiant(token: string): Observable<string> {
    return this.http.post<string>(this.URL + "/identifiant", token);
  }

  getUserMotDePasse(token: string): Observable<string> {
    return this.http.post<string>(this.URL + "/mdp", token);
  }
}

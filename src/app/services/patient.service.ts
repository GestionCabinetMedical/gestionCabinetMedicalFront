import { ConnectedUser } from "./../models/connectedUser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConnexionDto } from "app/models/connexionDto";
import { Patient } from "app/models/patient";
import { ResponseDto } from "app/models/responseDto";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Role } from "app/enums/Role.enum";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  private URL = environment.baseUrl + "gestion-rdv/patient";

  headers = new HttpHeaders({ "Content-Type": "application/json" });

  connectedUser: ConnectedUser;

  constructor(private http: HttpClient) {}

  create(patient: Patient): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, patient);
  }

  update(patient: Patient): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, patient);
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
    return this.http
      .post(this.URL + "/connexion", username, mdp, {
        headers: this.headers,
        observe: "response",
      })
      .pipe();
  }

  connect(connexionDto: ConnexionDto): boolean {
    let success = this.convert(connexionDto);
    if (success) {
      localStorage.setItem("token", connexionDto.token);
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
      return success;
    } else {
      (error) => {
        console.error("Erreur méthode connect() de PatientService", error);
      };
      return false;
    }
  }

  convert(connexionDto: ConnexionDto): boolean {
    this.connectedUser = new ConnectedUser();
    if (connexionDto.user != null) {
      this.connectedUser.identifiant = connexionDto.user.identifiant;
      this.connectedUser.motDePasse = connexionDto.user.motDePasse;
      this.connectedUser.role = Role.Patient;
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

import { Reservation } from "./../models/reservation";
import { Injectable } from "@angular/core";
import { ResponseDto } from "app/models/responseDto";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  private URL = environment.rdvUrl + "gestion-rdv/reservation";

  constructor(private http: HttpClient) {}

  create(reservation: Reservation): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, reservation);
  }

  update(reservation: Reservation): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, reservation);
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

  consulterPlanning(date: Date, idMedecin: number): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(
      this.URL +
        "/getAllResaParDateEtMedecin?date=" +
        date +
        "&idMedecin=" +
        idMedecin
    );
  }
}

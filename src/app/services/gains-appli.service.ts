import { GainsAppli } from "./../models/gainsAppli";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseDto } from "app/models/responseDto";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GainsAppliService {
  private URL = environment.adminUrl + "gestion-admin/gainsApi";

  constructor(private http: HttpClient) {}

  create(gainsapi: GainsAppli): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.URL, gainsapi);
  }

  update(gainsapi: GainsAppli): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(this.URL, gainsapi);
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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8989/springrestdata/api/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { } // Hacemos uso de la inyección de depencias CDI

  obtenerTodos(size: number): Observable<any> {
    return this.httpClient.get(`${baseURL}?size=${size}`);
  }

  crear(city: City): Observable<any> {
    return this.httpClient.post(baseURL, city);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

}

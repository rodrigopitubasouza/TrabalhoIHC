import { QuadraReservada } from './../models/QuadraReservada';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class QuadraReservadaService {

  url = 'http://localhost:3000/quadrasReservada';
  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'Authorization'
  });

  constructor( private http: HttpClient) { }

  getAllQuadras(): Observable<any> {
    return this.http.get(`${this.url}`, { headers: this.headers });
  }

  verificaQuadras(quadraReservada: QuadraReservada): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.url}?qualElemento=${quadraReservada.qualElemento}&data=${quadraReservada.data}&horario=${quadraReservada.horario}`, { headers: this.headers });
  }

  insereReservaQuadra(quadraReservada: QuadraReservada) {
    return this.http.post(`${this.url}`, quadraReservada, { headers: this.headers });
  }


}

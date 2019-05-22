import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  url = 'http://localhost:3000/quadras';
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

  getQuadras(id): Observable<any> {
      console.log(`${this.url}?id=${id}`);
      
    return this.http.get(`${this.url}?id=${id}`, { headers: this.headers });
  }


}

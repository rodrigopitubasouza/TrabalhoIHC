import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuarios';
  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'Authorization'
  });

  constructor( private http: HttpClient) { }

  confirmaLogin(usuario: Usuario): Observable<any>{
    console.log(`${this.url}?email=${usuario.email}&senha=${usuario.senha}`);
    return this.http.get(`${this.url}?email=${usuario.email}&senha=${usuario.senha}`,{ headers: this.headers });
  }

 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Contatos } from './../interfaces/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient) { }

  getContatos() {
    return this.http.get<Contatos[]>(environment.apiUrl);
  }
}
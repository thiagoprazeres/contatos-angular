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

  getContatoId(id: string) {
    return this.http.get<Contatos>(environment.apiUrl + '/' + id);
  }
  addContato(contato: Contatos) {
    return this.http.post<any>(environment.apiUrl, contato);
  }
  editContato(contato: Contatos) {
    return this.http.put<any>(environment.apiUrl + '/' + contato.id, contato);
  }
}

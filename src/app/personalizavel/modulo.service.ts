import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private baseUrl = 'http://localhost:3100'; // Altere para a URL do seu servidor JSON
  private baseUrlLTI = 'http://localhost:3000'; // Altere para a URL do seu servidor JSON
  private nomeTopicoSource = new BehaviorSubject<string>('');
  nomeTopico$ = this.nomeTopicoSource.asObservable();
  id_modulo!:string

  urlInicio!: string;
  topicos: any;
  bloqueio: any;
  informacoes: any;
  quantidadeTopicos!: number;
  notaTotal!: number;


  getUserInfo(ltik: string): Observable<any> {
    return this.http.get(`${this.baseUrlLTI}/userInfo?ltik=${ltik}`);
  }

  constructor(private http: HttpClient) {}

  getModuloPorNome(nomeModulo: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/modulos?nome_modulo=${nomeModulo}`);
  }

  setNomeTopico(nomeTopico: string) {
    this.nomeTopicoSource.next(nomeTopico);
  }
}

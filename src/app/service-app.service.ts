import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloqueio } from './bloqueioInterface';

@Injectable({
  providedIn: 'root'
})

export class ServiceAppService {
  constructor(private http: HttpClient) { }
  notaTotal:number = 0
  tokenStorage = localStorage.getItem('token');
  quantidadeTopicos = 0
  bloqueio!: Bloqueio[]
  informacoes = []
  urlInicio:string = ''

  liberar(idTopico:number):Observable<any>{
    this.tokenStorage = localStorage.getItem('token');
    const grade = {token:this.tokenStorage, idTopico: idTopico };
    console.log(grade)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorage
    });

    return this.http.post(`http://localhost:3000/api/liberar`, grade, { headers: headers });
  }

  sendGrade(nota: number): Observable<any> {
    this.tokenStorage = localStorage.getItem('token');
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorage
    });

    return this.http.post('http://localhost:3000/grade', grade, { headers: headers });
  }
 
  sendGradeIn(nota: number): Observable<any> {
    this.tokenStorage = localStorage.getItem('token');
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorage
    });

    return this.http.post('http://localhost:3000/gradeIn', grade, { headers: headers });
  }


  /**
   * Variável que controla as rotas na página HOME
   */
  controllerSwitchHome:number = 0

  
}

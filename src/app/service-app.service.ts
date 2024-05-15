import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {
  constructor(private http: HttpClient) { }
  notaTotal:number = 0
  ltik = ''
  quantidadeTopicos = 0
  /* TODO: Criar uma variavel pra guardar a url inicial do modulo */

  sendGrade(nota: number): Observable<any> {
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.ltik
    });

    return this.http.post('http://localhost:3000/grade', grade, { headers: headers });
  }

  sendGradeIn(nota: number): Observable<any> {
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.ltik
    });

    return this.http.post('http://localhost:3000/gradeIn', grade, { headers: headers });
  }

  /**
   * Variável que controla as rotas na página HOME
   */
  controllerSwitchHome:number = 0
}

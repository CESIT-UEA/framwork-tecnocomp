import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloqueio } from './bloqueioInterface';
import { Topico } from './components/forum/topico.interface';
import { TopicoF } from './components/forum/topico-forum/topico-forum.interface';
import { environment } from 'src/environments/environment.development';

/**
 * Service a qual guarda as operações essenciais, como o envio de notas, as informações do usuario, etc
 */
@Injectable({
  providedIn: 'root',
})
export class ServiceAppService {
  controlAtividade:number = 1
  /**
   * url da API
   */
  public apiUrl = environment.baseUrl;

  /**
   * @method
   * Constructor do ServiceAppService
   */
  constructor(private http: HttpClient) {}

  /**
   * Variavel que guarda a nota total do usuario no modulo
   */
  notaTotal: number = 0;

  /**
   * Variavel que guarda o token do usuario
   */
  tokenStorage = localStorage.getItem('token');
  url_return = localStorage.getItem('url_retono');

  /**
   * Variavel que guarda a quantidade de topicos
   */
  quantidadeTopicos = 0;

  topicos: Topico[] = [];

  /**
   * Variavel que guarda um vetor contendo a relação dos alunos com os topicos, auxiliando no bloqueio para ultrapassar rapidamente os tópicos do modulo
   */
  bloqueio: Bloqueio[] = [] ;

  /**
   * Variavel que guarda as informações do usuario vindas do moodle
   */
  informacoes = [];

  /**
   * Variavel que inicializa para posteriormente salvar a url inicial
   */
  urlInicio: string = '';

  /**
   * @method
   * Metódo que ?????? Verificar se este metodo esta sendo utilizado
   */
  liberar(idTopico: number): Observable<any> {
    this.tokenStorage = localStorage.getItem('token');
    const grade = { token: this.tokenStorage, idTopico: idTopico };
    console.log(grade);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(`${this.apiUrl}/api/liberar`, grade, {
      headers: headers,
    });
  }

  /**
   * @method
   * metódo responsavel pelo envio das notas para o moodle, um dos metódos essenciais, envia de forma com que a atividade seja concluida
   */
  sendGrade(nota: number): Observable<any> {
    this.tokenStorage = localStorage.getItem('token');
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(this.apiUrl + '/grade', grade, {
      headers: headers,
    });
  }

  /**
   * @method
   * metódo responsavel pelo envio das notas para o moodle, um dos metódos essenciais, envia de forma com que a atividade ainda esteja em progresso
   */
  sendGradeIn(nota: number): Observable<any> {
    this.tokenStorage = localStorage.getItem('token');
    const grade = { grade: nota };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(this.apiUrl + '/gradeIn', grade, {
      headers: headers,
    });
  }

  getTopicoForum(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/forum_topicos/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.get(url, {
      headers,
    });
  }

  getTopicoForumOne(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/forum_topicos_one/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.get(url, {
      headers,
    });
  }

  /**
   * Variável que controla as rotas na página HOME
   */
  controllerSwitchHome: number = 0;

  criarPostagemTopico(postagem:any)/* : Observable<any> */ {
    console.log(postagem)
    this.tokenStorage = localStorage.getItem('token');
    const grade = {postagem};
    console.log(grade);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(`${this.apiUrl}/api/criar/forum`, grade, {
      headers: headers,
    });
  }

  criarComentario(comentario:any)/* : Observable<any> */ {
    console.log(comentario)
    this.tokenStorage = localStorage.getItem('token');
    const grade = {comentario};
    console.log(grade);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(`${this.apiUrl}/api/criar/comentario`, grade, {
      headers: headers,
    });
  }
}

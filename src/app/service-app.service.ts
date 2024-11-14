import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bloqueio } from './bloqueioInterface';
import { Topico } from './components/forum/topico.interface';
import { TopicoF } from './components/forum/topico-forum/topico-forum.interface';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * Service a qual guarda as operações essenciais, como o envio de notas, as informações do usuario, etc
 */
@Injectable({
  providedIn: 'root',
})
export class ServiceAppService {
  controlAtividade: number = 1;
  /**
   * url da API
   */
  public apiUrl = environment.baseUrl;
  public currentVideoIndex: number = 0;
  // Implementar o Controle com apenas um service
  private storageKey = 'dados_completos_do_modulo';
  public dados_completos: any = [];

  perfilUser = false;

  abreMenuUser(){
    this.perfilUser = true
    console.log("Abrindo menu")
  }

  fechaMenuUser(){
    this.perfilUser = false
    console.log("Fechou menu User")
  }

  /**
   * @method
   * Constructor do ServiceAppService
   */
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

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
  bloqueio: any[] = [];

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

  getDadosCompletos(): void {
    this.dados_completos = localStorage.getItem(this.storageKey);
    if (this.dados_completos) {
      this.dados_completos = JSON.parse(this.dados_completos);
      this.notaTotal = this.dados_completos?.userModulo?.nota;

      console.log('Service data 3: ', this.dados_completos);
    }
  }

  setDadosCompletos(dados: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(dados));

    this.getDadosCompletos();
  }

  removeDadosCompletos(): void {
    localStorage.removeItem(this.storageKey);
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

  criarPostagemTopico(postagem: any) /* : Observable<any> */ {
    console.log(postagem);
    this.tokenStorage = localStorage.getItem('token');
    const grade = { postagem };
    console.log(grade);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(`${this.apiUrl}/api/criar/forum`, grade, {
      headers: headers,
    });
  }

  criarComentario(comentario: any) /* : Observable<any> */ {
    console.log(comentario);
    this.tokenStorage = localStorage.getItem('token');
    const grade = { comentario };
    console.log(grade);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorage,
    });

    return this.http.post(`${this.apiUrl}/api/criar/comentario`, grade, {
      headers: headers,
    });
  }

  finalizarVideo(
    ltiUserId: string,
    videoId: number,
    ltik: string
  ): Observable<any> {
    const body = { ltiUserId, videoId, ltik };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.dados_completos.user.ltik,
    });

    return this.http.post(`${this.apiUrl}/finalizar-video`, body, { headers });
  }

  public verificarTodosVideosCompletos(videos: any[]): boolean {
    // Itera sobre todos os vídeos
    for (const video of videos) {
      // Para cada vídeo, verifica os dados de UsuarioVideos
      for (const usuarioVideo of video.UsuarioVideos) {
        // Se encontrar algum vídeo não completo, retorna false
        if (!usuarioVideo.completo) {
          return false;
        }
      }
    }
    // Se nenhum vídeo estiver incompleto, retorna true
    return true;
  }

  public mensagem(texto: string, classePersonalizada:string = '',tempo: number = 2000) {
    let config = new MatSnackBarConfig();
    config.panelClass = 'testando';
    if (classePersonalizada != '') {
      config.panelClass = classePersonalizada
    }
    config.duration = tempo
    this._snackBar.open(texto,"ok",config);

  }

 enviarRespostaIncorreta(
  idTopico: number,
  ltik: string,
  respostaErrada: string
  ): Observable<any> {
    const body = { idTopico, ltik, respostaErrada };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.dados_completos.user.ltik,
    });

    return this.http.post(`${this.apiUrl}/resposta-errada`, body, { headers });
  }

  enviarResetarRespostaIncorreta(
    idTopico: number,
    ltik: string,
    ): Observable<any> {
      const body = { idTopico, ltik };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.dados_completos.user.ltik,
      });

      return this.http.post(`${this.apiUrl}/resposta-errada-refazer`, body, { headers });
    }
}

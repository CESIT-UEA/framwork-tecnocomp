import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Componente reutilizavel da Home de cada módulo
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /**
   * Variavel que guarda o nome
   */
  nome: string = '';

  /**
   * @constructor
   * Um método feito para testar caso seja clicado
   */
  constructor(
    public appService: ServiceAppService,
    private router: Router,
    private http: HttpClient
  ) {}

  /**
   * Variavel que guarda o tokenData, o qual é a variavel que guarda as informações do token do usuario, obtidas ao entrar pela primeira vez vindo do moodle
   */
  tokenData: any;

  ngOnInit() {
    /**
     * Variavel a qual é uma constante, que recebe a url atual
     */
    const urlParams = new URLSearchParams(window.location.search);
    /**
     * Variavel a qual é uma constante, que recebe e guarda o token lti recebido na url
     */
    const token = urlParams.get('ltik') || '';
    const url_return = urlParams.get('url_retorno') || '';
    console.log(url_return);

    /**
     * Condicional que verifica se a constante token é diferente de vazia, se for, ele armazena no armazenamento local
     */
    if (token != '') {
      localStorage.setItem('token', token);
    }

    /**
     * Variavel a qual recebe o token guardado no armazenamento local
     */
    let tokenStorage = localStorage.getItem('token');

    this.http
      .get(`http://localhost:3000/api/userInfo?ltik=${tokenStorage}`)
      .subscribe(
        (data) => {
          this.tokenData = data;
          console.log(this.tokenData);

          this.appService.urlInicio =
            this.tokenData.modulo.tituloModulo + 'Home';
          localStorage.setItem(
            'bloqueio',
            JSON.stringify(this.tokenData.userTopico)
          );
          console.log(this.tokenData.user.return_url);

          localStorage.setItem('url_retorno', this.tokenData.user.return_url);

          localStorage.setItem('topicos', JSON.stringify(this.tokenData.topicos));
          let bloqueio = localStorage.getItem('bloqueio');
          this.appService.topicos = this.tokenData.topicos;

          this.appService.bloqueio = bloqueio
            ? JSON.parse(bloqueio)
            : this.tokenData.userTopico;

          console.log(this.appService.bloqueio);
          console.log(bloqueio);

          this.appService.informacoes = this.tokenData;
          this.appService.quantidadeTopicos =
            this.tokenData.modulo.quantidadeTopicos;
          this.appService.notaTotal = this.tokenData.userModulo.notaAcumulada;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  /**
   * @method
   */
  navigation() {
    this.router.navigate(['/teorias-da-aprendizagem']);
  }
}

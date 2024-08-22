import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuloService } from 'src/app/personalizavel/modulo.service';
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
  @Input() urlVideoInicial: any;
  /**
   * @constructor
   * Um método feito para testar caso seja clicado
   */
  constructor(
    public appService: ServiceAppService,
    public moduloService: ModuloService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  /**
   * Variavel que guarda o tokenData, o qual é a variavel que guarda as informações do token do usuario, obtidas ao entrar pela primeira vez vindo do moodle
   */
  tokenData: any;

  ngOnInit(): void {
    this.tokenData = localStorage.getItem('dados_completos_do_modulo');
    if (this.tokenData) {
      this.tokenData = JSON.parse(this?.tokenData);
      this.appService.notaTotal = this?.tokenData?.userModulo.nota;
      console.log('Nota: ', this?.tokenData?.userModulo?.nota);
      console.log('Token data: ', this?.tokenData);
    }

    const ltik = this.route.snapshot.queryParamMap.get('ltik');

    if (ltik) {
      const headers = { Authorization: 'Bearer ' + ltik };
      this.http
        .get<any>(`https://cesitserver.uea.edu.br:8002/userInfo?ltik=${ltik}`, {
          headers,
        })
        .subscribe({
          next: (data) => {
            console.log('Ola mundo');
            console.log(data);
          },
          error: (error) => {
            console.log('Errou de novo');
            console.error('Erro:', error);
          },
        });

      this.moduloService.getUserInfo(ltik).subscribe(
        (data) => {
          this.tokenData = data;

          this.moduloService.urlInicio =
            this.tokenData.modulo.nome_modulo + 'Home';
          localStorage.setItem(
            'bloqueio',
            JSON.stringify(this.tokenData.userTopico)
          );
          //!Importante
          localStorage.setItem(
            'dados_completos_do_modulo',
            JSON.stringify(this.tokenData)
          );

          localStorage.setItem('token', this.tokenData.user.ltik);

          localStorage.setItem('url_retorno', this.tokenData.user.return_url);
          localStorage.setItem(
            'topicos',
            JSON.stringify(this.tokenData.topicos)
          );

          let bloqueio = localStorage.getItem('bloqueio');
          this.moduloService.topicos = this.tokenData.topicos;

          this.moduloService.bloqueio = bloqueio
            ? JSON.parse(bloqueio)
            : this.tokenData.userTopico;

          this.moduloService.informacoes = this.tokenData;
          this.moduloService.quantidadeTopicos =
            this.tokenData.modulo.quantidadeTopicos;
          this.moduloService.notaTotal =
            this.tokenData.userModulo.notaAcumulada;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  /**
   * @method
   */
  navigation() {
    this.router.navigate(['/teorias-da-aprendizagem']);
  }
}

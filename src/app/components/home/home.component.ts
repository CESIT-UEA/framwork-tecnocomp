import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
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
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;

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
    const ltik = this.route.snapshot.queryParamMap.get('ltik');
    if (ltik) {
      this.moduloService.getUserInfo(ltik).subscribe(
        (data) => {
          this.tokenData = data;

          this.moduloService.urlInicio =
            this.tokenData.modulo.nome_modulo + 'Home';
          localStorage.setItem(
            'bloqueio',
            JSON.stringify(this.tokenData.userTopico)
          );

          // Removendo se já existir um
          let teste = localStorage.getItem('dados_completos_do_modulo');
          if (teste) {
            localStorage.removeItem('dados_completos_do_modulo')
          }

          //!Importante
          localStorage.setItem(
            'dados_completos_do_modulo',
            JSON.stringify(data)
          );
          let teste2 = localStorage.getItem('token');
          if (teste2) {
            localStorage.removeItem('token')
          }

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

    this.appService.dados_completos = localStorage.getItem('dados_completos_do_modulo');

    this.tokenData = localStorage.getItem('dados_completos_do_modulo');

/*    if (this.appService.dados_completos) {
      this.appService.dados_completos = JSON.parse(this.appService.dados_completos);
      this.appService.notaTotal = this.appService.dados_completos.userModulo.nota;
      console.log('Nota 3: ', this.appService.dados_completos.userModulo?.nota);
      console.log('Service data 3: ', this.appService.dados_completos);
    }*/

    if (this.tokenData) {
      this.tokenData = JSON.parse(this?.tokenData);
      this.appService.notaTotal = this?.tokenData?.userModulo.nota;
      console.log('Nota: ', this?.tokenData?.userModulo?.nota);
      console.log('Token data: ', this?.tokenData);
    }


    this.nome = this.tokenData.modulo.nome_modulo;
    let words = this.nome.split('-');
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    let result = capitalizedWords.join(' ');
    this.nome = result;
  }

  /**
   * @method
   */
  navigation() {
    this.router.navigate(['/teorias-da-aprendizagem']);
  }

  clickHeader() {
    if (this.appService.controllerSwitchHome == 0) {
      return (this.appService.controllerSwitchHome = 1);
    } else {
      return (this.appService.controllerSwitchHome = 0);
    }
  }

  fecharMenuClick() {
    this.sidenavContainer.close();
  }

  navegarModulo(topicoId:number){
    console.log(topicoId)
    this.moduloService.controll_topico = topicoId
    this.sidenavContainer.close();
  }
}

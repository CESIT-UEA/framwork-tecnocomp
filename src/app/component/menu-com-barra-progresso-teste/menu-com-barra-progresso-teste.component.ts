import { Component, OnInit, signal } from '@angular/core';
import { AprendizagemEInformaticaService } from 'src/app/pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.service';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Componente que contem a barra de progresso
 */
@Component({
  selector: 'app-menu-com-barra-progresso-teste',
  templateUrl: './menu-com-barra-progresso-teste.component.html',
  styleUrls: ['./menu-com-barra-progresso-teste.component.css'],
})
export class MenuComBarraProgressoTesteComponent implements OnInit{
  teste:any
  /**
   * @constructor
   */
  constructor(
    /**
     * Variavel que instancia o service AprendizagemEmInformaticaService
     */
    public aprendizagemInformatica: AprendizagemEInformaticaService,

    /**
     * Variavel que instancia o service ServiceAppService, que contém as configurações LTI
     */
    public ltiService: ServiceAppService
  ) {}

  ngOnInit(): void {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    if (this.teste) {
      this.teste = JSON.parse(this.teste);
      console.log(this.teste);
    }
  }

  verificarConcluido(i:number){
    return this?.teste?.userTopico[i]?.encerrado
  }
}

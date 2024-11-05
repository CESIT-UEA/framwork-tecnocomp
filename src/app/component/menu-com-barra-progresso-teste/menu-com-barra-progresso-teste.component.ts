import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { AprendizagemEInformaticaService } from 'src/app/pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.service';
import { ModuloService } from 'src/app/personalizavel/modulo.service';
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

  @Output() fecharMenu = new EventEmitter<void>();

  @Output() navegarModulo = new EventEmitter<number>();

  @Input()  verificaMenuHome = false;


  constructor(
    /**
     * Variavel que instancia o service AprendizagemEmInformaticaService
     */
    public aprendizagemInformatica: AprendizagemEInformaticaService,

    /**
     * Variavel que instancia o service ServiceAppService, que contém as configurações LTI
     */
    public ltiService: ServiceAppService,
    public moduloService: ModuloService
  ) {}

  ngOnInit(): void {

  }

  verificarConcluido(i:number){
    return this.ltiService.dados_completos?.userTopico[i]?.UsuarioTopicos[0].encerrado
  }
}

import { Component, signal } from '@angular/core';
import { AprendizagemEInformaticaService } from 'src/app/pages/modulos/aprendizagem-e-informatica/aprendizagem-e-informatica.service';
import { ServiceAppService } from 'src/app/service-app.service';


@Component({
  selector: 'app-menu-com-barra-progresso-teste',
  templateUrl: './menu-com-barra-progresso-teste.component.html',
  styleUrls: ['./menu-com-barra-progresso-teste.component.css']
})
export class MenuComBarraProgressoTesteComponent {
  constructor(public aprendizagemInformatica: AprendizagemEInformaticaService,public ltiService:ServiceAppService) {

  }

}

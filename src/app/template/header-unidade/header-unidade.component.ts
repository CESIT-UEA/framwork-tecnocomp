import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-header-unidade',
  templateUrl: './header-unidade.component.html',
  styleUrls: ['./header-unidade.component.css']
})
export class HeaderUnidadeComponent {
  constructor(private appService:ServiceAppService){}
  /**
   * Vetor de tópicos
   */
  constructor(private appService:ServiceAppService,private router: Router){}
  listaDeUnidades: string[] = ['Behaviorismo', 'Construtivismo', 'Socioconstrutivismo', 'Construcionismo'];

  listaDeUnidadesLinks: string[] = ['/teorias-da-aprendizagem', '/teorias-da-aprendizagem/construtivismo', '/teorias-da-aprendizagem/socioconstrutivismo', '/teorias-da-aprendizagem/construcionismo'];

  isOpen = false;

  /**
   * @method
   * Controla a alternância da barra de lateral
   */
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  menuClick(){
    if(this.menuHeader == "menu"){
      this.menuHeader = "close";
    }else{
      this.menuHeader = "menu"
    }

  }

  menuHeader = "menu"

  navegarParaRota() {
    console.log("Entrei na rota")
    this.router.navigate([`${this.appService.urlInicio}`]);
  }

}

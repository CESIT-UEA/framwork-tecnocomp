import { Component,Input} from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public appService:ServiceAppService){}
  events: string[] = [];
  opened!: boolean;
  /**
   * @method
   * Controla a navegação da página HOME com a ficha técnica  
   */
  clickHeader(){
    if(this.appService.controllerSwitchHome == 0){
      return this.appService.controllerSwitchHome = 1
    }else{
      return this.appService.controllerSwitchHome = 0
    }
  }

  /**
   * Vetor de tópicos
   */
  unidades: string[] = ['Teorias da Aprendizagem', 'TDICs', 'EDUCAÇÃO  4.0', 'Projeto Aprendizagem e Informatica'];

  unidadesLinks: string[] = ['/teorias-da-aprendizagem', 'TDICs', 'EDUCAÇÃO  4.0', 'Projeto Aprendizagem e Informatica'];

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


}

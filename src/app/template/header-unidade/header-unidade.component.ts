import { Component } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-header-unidade',
  templateUrl: './header-unidade.component.html',
  styleUrls: ['./header-unidade.component.css']
})
export class HeaderUnidadeComponent {
  constructor(private appService:ServiceAppService){}
  listaDeUnidades: string[] = ['Behaviorismo', 'Construtivismo', 'Socioconstrutivismo', 'Construcionismo'];

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  
  menuClick(){
    if (this.appService.menu == null) {
      this.appService.menu = "close";
      this.menuHeader = "close";
    }else if(this.appService.menu == "menu"){
      this.appService.menu = "close";
      this.menuHeader = "close";
    }else{
      this.appService.menu = "menu"
      this.menuHeader = "menu";
    }

  }

  menuHeader = this.appService.menu == null ? "menu" : this.appService.menu

  
}

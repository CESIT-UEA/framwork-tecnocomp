import { Component,Input } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private appService:ServiceAppService){}
  events: string[] = [];
  opened!: boolean;

  unidades: string[] = ['Teorias da Aprendizagem', 'TDICs', 'EDUCAÇÃO  4.0', 'Projeto Aprendizagem e Informatica'];

  unidadesLinks: string[] = ['/teorias-da-aprendizagem', 'TDICs', 'EDUCAÇÃO  4.0', 'Projeto Aprendizagem e Informatica'];

  isOpen = false;

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

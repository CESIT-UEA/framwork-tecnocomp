import { Component } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private appService:ServiceAppService){}

  unidades: string[] = ['Behaviorismo', 'Construtivismo', 'Socioconstrutivismo', 'Construcionismo'];

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

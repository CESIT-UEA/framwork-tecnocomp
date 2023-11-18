import { Component,OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private appService:ServiceAppService){}

  estilosMenu() {
    return {
        container_menu_ativo: this.appService.menu == "menu" ? true : false,
    };
}
  
}

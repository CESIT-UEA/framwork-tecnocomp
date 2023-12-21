import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private appService:ServiceAppService,private router:Router){}
  estilosMenu() {
    return {
        container_menu_ativo: this.appService.menu == "menu" ? true : false,
    };
}
  navigation(){
    this.router.navigate(['/teorias-da-aprendizagem']);
  }

}

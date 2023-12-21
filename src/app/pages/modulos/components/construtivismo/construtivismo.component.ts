import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construtivismo',
  templateUrl: './construtivismo.component.html',
  styleUrls: ['./construtivismo.component.css']
})
export class ConstrutivismoComponent {
  constructor(private router:Router){}

  arrayVideos:string[] = ['https://www.youtube.com/embed/tUrWNO3EUu8?si=7V-KJXKOIAivWTug','https://www.youtube.com/embed/tRO0wUFprnk?si=H29WK9TNkXvgnl7N'];

  navigation(){
    this.router.navigate(['teorias-da-aprendizagem/socioconstrutivismo']);
  }

  navigationVoltar(){
    this.router.navigate(['teorias-da-aprendizagem']);
  }
}

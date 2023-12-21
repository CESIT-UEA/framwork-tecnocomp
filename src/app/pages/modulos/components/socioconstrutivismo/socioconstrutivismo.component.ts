import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socioconstrutivismo',
  templateUrl: './socioconstrutivismo.component.html',
  styleUrls: ['./socioconstrutivismo.component.css']
})
export class SocioconstrutivismoComponent {
  constructor(private router:Router){}

  arrayVideos:string[] = ['https://www.youtube.com/embed/5wMm5C5DjI8?si=txYG6E1KhMvhdGGe','https://www.youtube.com/embed/mhGJ4v__hqs?si=GZli-_qP3dXlFmfi'];

  navigation(){
    this.router.navigate(['teorias-da-aprendizagem/construcionismo']);
  }

  navigationVoltar(){
    this.router.navigate(['teorias-da-aprendizagem/construtivismo']);
  }

}

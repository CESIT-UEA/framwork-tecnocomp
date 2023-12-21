import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construcionismo',
  templateUrl: './construcionismo.component.html',
  styleUrls: ['./construcionismo.component.css']
})
export class ConstrucionismoComponent {
  constructor(private router:Router){}

  arrayVideos:string[] = ['https://www.youtube.com/embed/poWicP3Ddd4?si=aTq8--T_HjYpkz53','https://www.youtube.com/embed/AfFTOTx0K4I?si=JLs1naJQolh1i-Xq'];

  navigation(){
    this.router.navigate(['teorias-da-aprendizagem/socioconstrutivismo']);
  }

  navigationVoltar(){
    this.router.navigate(['teorias-da-aprendizagem/construtivismo']);
  }
}

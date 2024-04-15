import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  nome: string = '';
  constructor(public appService:ServiceAppService,private router:Router,private http:HttpClient){}

  tokenData: any;

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('ltik') || '';
    this.appService.ltik = token
    console.log(this.appService.ltik)
    console.log("Tudo embaixo")
 
    this.http.get(`http://localhost:3000/api/userInfo?ltik=${token}`).subscribe(
      data => {
        this.tokenData = data;
        this.nome = JSON.stringify(this.tokenData.name)
        console.log(this.tokenData); 
        this.appService.quantidadeTopicos = this.tokenData.modulo.quantidadeTopicos
        this.appService.notaTotal = this.tokenData.userModulo.notaAcumulada
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  navigation(){
    this.router.navigate(['/teorias-da-aprendizagem']);
  }


}

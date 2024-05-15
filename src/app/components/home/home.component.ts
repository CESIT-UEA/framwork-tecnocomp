import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nome: string = '';
  constructor(
    public appService: ServiceAppService,
    private router: Router,
    private http: HttpClient
  ) {}

  tokenData: any;

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('ltik') || '';

    if(token != ''){
      localStorage.setItem('token', token);
    }

    let tokenStorage = localStorage.getItem('token');


    this.http
      .get(`http://localhost:3000/api/userInfo?ltik=${tokenStorage}`)
      .subscribe(
        (data) => {
          this.tokenData = data;
          console.log(this.tokenData);

          this.appService.urlInicio = this.tokenData.modulo.tituloModulo + "Home"
          localStorage.setItem('bloqueio', JSON.stringify(this.tokenData.userTopico));


          let bloqueio = localStorage.getItem('bloqueio');
          // Talvez o bug esteja aqui
          this.appService.bloqueio = bloqueio ? JSON.parse(bloqueio) : this.tokenData.userTopico;
          
          console.log(this.appService.bloqueio);
          this.appService.informacoes = this.tokenData;
          this.appService.quantidadeTopicos =
            this.tokenData.modulo.quantidadeTopicos;
          this.appService.notaTotal = this.tokenData.userModulo.notaAcumulada;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  /**
   * @method 
   */
  navigation(){
  navigation() {
    this.router.navigate(['/teorias-da-aprendizagem']);
  }
}

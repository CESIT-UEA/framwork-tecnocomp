import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Classe responsavel pelo forum, é um componente reutilizavel
 */
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  /**
   * @constructor
   */
  constructor(public ltiService: ServiceAppService, private router: Router) {}

  /**
   * @method
   * Metodo para navegar para um topico do forum especifico
   */
  navegarParaTopico(id: number): void {
    this.router.navigate(['/topico', id]);
  }
  ngOnInit(): void {
    let teste_topicos = localStorage.getItem('topicos');
    if(teste_topicos){
      this.ltiService.topicos = JSON.parse(teste_topicos)
    }else{
      alert("Algo deu errado ao carregar os topicos")
    }
  }

  navegarParaRota() {
    this.router.navigate([`${this.ltiService.urlInicio}`]);
  }
}

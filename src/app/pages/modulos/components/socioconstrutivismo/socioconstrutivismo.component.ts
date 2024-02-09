import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AprendizagemEInformaticaService } from '../../aprendizagem-e-informatica/aprendizagem-e-informatica.service';

@Component({
  selector: 'app-socioconstrutivismo',
  templateUrl: './socioconstrutivismo.component.html',
  styleUrls: ['../behaviorismo/behaviorismo.component.css']
})
export class SocioconstrutivismoComponent {
  constructor(private router:Router,public aprendizagemInformatica:AprendizagemEInformaticaService){}
  teste = 1
  nome = "Socioconstrutivismo"

  arrayVideos:string[] = ['https://www.youtube.com/embed/5wMm5C5DjI8?si=txYG6E1KhMvhdGGe','https://www.youtube.com/embed/mhGJ4v__hqs?si=GZli-_qP3dXlFmfi'];

  arrayReferencias:string[] = [
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
  ]
  arrayLinks:string[] = [
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea','https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea','https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea'
  ]

  pergunta: string = "Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?"

  arrayAlternativas = [
    {
      nome: 'A',
      descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
      correto:true
    },
    {
      nome: 'B',
      descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
      correto:false
    },
    {
      nome: 'C',
      descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
      correto:false
    },
    {
      nome: 'D',
      descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
      correto:false
    },
  ]
  controllerSwitch:number = 0

  atividadeClick(){
    this.controllerSwitch = this.controllerSwitch == 0 ? 1 : 0
  }

  referenciasClick(){
    this.controllerSwitch = this.controllerSwitch == 0 ? 2 : 0
  }

  linksClick(){
    this.controllerSwitch = this.controllerSwitch == 0 ? 3 : 0
  }

  textoApoioClick(){
    this.controllerSwitch = this.controllerSwitch == 0 ? 4 : 0
  }


  navigation(){
    this.router.navigate(['teorias-da-aprendizagem/construcionismo']);
  }

  navigationVoltar(){
    this.router.navigate(['teorias-da-aprendizagem/construtivismo']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AprendizagemEInformaticaService } from '../../aprendizagem-e-informatica/aprendizagem-e-informatica.service';

@Component({
  selector: 'app-behaviorismo',
  templateUrl: './behaviorismo.component.html',
  styleUrls: ['./behaviorismo.component.css']
})
export class BehaviorismoComponent {
  constructor(public aprendizagemInformatica:AprendizagemEInformaticaService){

  }
  teste = 0
  nome = "contutivismo"
  arrayReferenciasTeste = [
    {
      tituloLivro:'Behaviorismo Radical: Crítica e Metacrítica',
      nome_autor:'Kester Carrara',
      caminho_imagem:'Livro 1'
    }
  ]
  arrayReferencias:string[] = [
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
    'BOSI, Alfredo. Historia concisa da literatura brasileira. 38. ed. São Paulo: Cortes, 2002',
  ]
  arrayLinks:string[] = [
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea','https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea','https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea'
  ]

  arrayVideos:string[] = ['https://www.youtube.com/embed/c6kVJNkAeH4?si=78pwIHKZf_PDQuW_','https://www.youtube.com/embed/Vh8oOY0v9bg?si=_9t9bhiKjef2VgWK'];
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

  questions  = [{
    question: 'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?',
    answers: [
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A24',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A25',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A26',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A27'],
    correctAnswer: 'Resposta B'
  },
  {
    question: 'Segunda Questão',
    answers: [
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A24',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A25',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A26',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A27'],
    correctAnswer: 'Resposta C'
  },
  {
    question: 'Terceira Questão',
    answers: [
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A24',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A25',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A26',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A27'],
    correctAnswer: 'Resposta C'
  },
  {
    question: 'Quarta Questão',
    answers: [
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A24',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A25',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A26',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A27'],
    correctAnswer: 'Resposta D'
  },
  {
    question: 'Quinta Questão',
    answers: [
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A24',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A25',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A26',
      'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.A27'],
    correctAnswer: 'Resposta A'
  }
  ]
}

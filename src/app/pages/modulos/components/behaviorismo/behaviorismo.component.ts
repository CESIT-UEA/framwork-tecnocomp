import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviorismo',
  templateUrl: './behaviorismo.component.html',
  styleUrls: ['./behaviorismo.component.css']
})
export class BehaviorismoComponent {
  arrayVideos:string[] = ['https://www.youtube.com/embed/c6kVJNkAeH4?si=78pwIHKZf_PDQuW_','https://www.youtube.com/embed/Vh8oOY0v9bg?si=_9t9bhiKjef2VgWK'];
  pergunta: string = "Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?"
  arrayAlternativas = [
    {
      nome: 'A',
      descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
      correto:false
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

  isAtividadeTrue:boolean = true

  atividadeClick(){
    this.isAtividadeTrue = this.isAtividadeTrue == true ? false : true
    console.log(this.isAtividadeTrue)
  }

}

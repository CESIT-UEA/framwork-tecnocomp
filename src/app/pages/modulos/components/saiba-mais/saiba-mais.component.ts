import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  @Input() links!: string[];
  @Output() linksClick = new EventEmitter<void>();

  saibaMais: any = [
  {
    descricao: 'O que é Behaviorismo? Entenda um pouco da Psicologia Comportamental',
    url: 'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR714G91805&p=interroga%C3%A7%C3%A3o'
   },
   {
    descricao: 'Behaviorismo - o ser humano é realmente livre?',
    url: 'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR714G91805&p=interroga%C3%A7%C3%A3o'
   },
   {
    descricao: 'O que é Behaviorismo? Entenda um pouco da Psicologia Comportamental',
    url: 'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR714G91805&p=interroga%C3%A7%C3%A3o'
   }
  ]

}

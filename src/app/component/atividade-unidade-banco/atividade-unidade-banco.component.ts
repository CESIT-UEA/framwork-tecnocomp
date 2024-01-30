import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Questao } from './questao.model';

@Component({
  selector: 'app-atividade-unidade-banco',
  templateUrl: './atividade-unidade-banco.component.html',
  styleUrls: ['./atividade-unidade-banco.component.css']
})
export class AtividadeUnidadeBancoComponent {
  questoes: Questao[] = [
    {
      titulo:'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?',
      alternativas:[
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta:0
    },
    {
      titulo:'O que é o behaviorismo?',
      alternativas:[
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta:1
    },
    {
      titulo:'Skinner e Piaget são teoricos do behaviorismo?',
      alternativas:[
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel:true,
          descricao:'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta:2
    },
  ];

  questaoAtual: Questao;
  respostaSelecionada!: number;
  respostaEnviada = false;
width: any;

  constructor() {
    this.questaoAtual = this.questoes[0];
  }

  selecionarResposta(index: number) {
    this.respostaSelecionada = index;
  }

  enviarResposta() {
    this.respostaEnviada = true;
  }

  proximaQuestao() {
    const indexAtual = this.questoes.indexOf(this.questaoAtual);
    if (indexAtual < this.questoes.length - 1) {
      this.questaoAtual = this.questoes[indexAtual + 1];
      this.respostaEnviada = false;
      this.respostaSelecionada != null;
    }
  }

  getImagem(i: number): string {
    if (!this.respostaEnviada) {
      // Se a resposta ainda não foi enviada, mostre a imagem da letra
      return `assets/img/Letra ${[i]}.png`;
    } else if (i === this.questaoAtual.respostaCorreta) {
      // Se a resposta foi enviada e esta é a resposta correta, mostre a imagem de correto
      return 'assets/img/correto.png';
    } else if (i === this.respostaSelecionada) {
      // Se a resposta foi enviada e esta é a resposta selecionada (e está errada), mostre a imagem de errado
      return 'assets/img/errado.png';
    } else {
      // Para todas as outras alternativas, mostre a imagem da letra
      return `assets/img/Letra ${[i]}.png`;
    }
  }
}

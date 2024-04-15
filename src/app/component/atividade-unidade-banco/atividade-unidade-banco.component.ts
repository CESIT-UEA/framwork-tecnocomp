import { Component, Input } from '@angular/core';
import { Questao } from './questao.model';

@Component({
  selector: 'app-atividade-unidade-banco',
  templateUrl: './atividade-unidade-banco.component.html',
  styleUrls: ['./atividade-unidade-banco.component.css'],
})
export class AtividadeUnidadeBancoComponent {
  @Input() questoes_banco: Questao[] = [
    {
      titulo:
        'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:
            'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
      ],
      respostaCorreta: 0,
    },
    {
      titulo: 'O que é o behaviorismo?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:
            'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
      ],
      respostaCorreta: 1,
    },
    {
      titulo: 'Skinner e Piaget são teoricos do behaviorismo?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao:
            'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
        {
          explicacaoVisivel: true,
          descricao:
            'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao:
            'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        },
      ],
      respostaCorreta: 2,
    },
  ];
  controlador_questao = 0
  questaoAtual: Questao;
  respostaSelecionada!: number;
  respostaEnviada = false;

  constructor() {
    this.questaoAtual = this.questoes_banco[0];
  }

  selecionarResposta(index: number) {
    this.respostaSelecionada = index;

    if (this.questaoAtual.respostaCorreta == this.respostaSelecionada) {
      console.log('Resposta certa');
    } else {
      console.log('Resposta errada');
    }

    console.log(this.respostaSelecionada);
  }

  enviarResposta() {
    this.respostaEnviada = true;
  }

  proximaQuestao() {
    console.log(this.questoes_banco[this.controlador_questao])
    console.log(this.questaoAtual)
    
    let indexAtual = this.questoes_banco.indexOf(this.questaoAtual);
    
    // Se todas as questões foram respondidas, reinicie o questionário
    if (indexAtual >= this.questoes_banco.length - 1) {
      indexAtual = -1;
    }
  
    this.questaoAtual = this.questoes_banco[indexAtual + 1];
    this.respostaEnviada = false;
  }
  

  getImagemResposta(i: number): string {
    if (!this.respostaEnviada) {
      return `assets/img/Letra ${[i]}.png`;
    } else if (i === this.questaoAtual.respostaCorreta) {
      return 'assets/img/correto.png';
    } else if (i === this.respostaSelecionada) {
      return 'assets/img/errado.png';
    } else {
      return `assets/img/Letra ${[i]}.png`;
    }
  }
}

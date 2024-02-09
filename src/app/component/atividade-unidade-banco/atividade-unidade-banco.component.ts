import { Component, Input } from '@angular/core';
import { Questao } from './questao.model';

@Component({
  selector: 'app-atividade-unidade-banco',
  templateUrl: './atividade-unidade-banco.component.html',
  styleUrls: ['./atividade-unidade-banco.component.css']
})
export class AtividadeUnidadeBancoComponent {
  /* TO DO: Resolver o bug da questão, pois carrega a primeira questão padrão do modelo e apenas depois carrega as questões passadas pelo componente pai */

  @Input() questoes_banco: Questao[] = [
    {
      titulo: 'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao: 'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta: 0
    },
    {
      titulo: 'O que é o behaviorismo?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao: 'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta: 1
    },
    {
      titulo: 'Skinner e Piaget são teoricos do behaviorismo?',
      alternativas: [
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper  congue turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue.',
          explicacao: 'Correto! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
        {
          explicacaoVisivel: true,
          descricao: 'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed volutpat congue turpis.',
          explicacao: 'Errado! Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.'
        },
      ],
      respostaCorreta: 2
    },
  ];

  questaoAtual: Questao;
  respostaSelecionada!: number;
  respostaEnviada = false;
  width: any;

  constructor() {
    this.questaoAtual = this.questoes_banco[0];
  }

  selecionarResposta(index: number) {
    this.respostaSelecionada = index;
  }

  enviarResposta() {
    this.respostaEnviada = true;
  }

  proximaQuestao() {
    const indexAtual = this.questoes_banco.indexOf(this.questaoAtual);
    if (indexAtual < this.questoes_banco.length - 1) {
      this.questaoAtual = this.questoes_banco[indexAtual + 1];
      this.respostaEnviada = false;
      this.respostaSelecionada != null;
    }
  }

  getImagem(i: number): string {
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

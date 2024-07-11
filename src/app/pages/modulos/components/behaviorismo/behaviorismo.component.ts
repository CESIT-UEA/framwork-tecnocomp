import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AprendizagemEInformaticaService } from '../../aprendizagem-e-informatica/aprendizagem-e-informatica.service';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-behaviorismo',
  templateUrl: './behaviorismo.component.html',
  styleUrls: ['./behaviorismo.component.css'],
})
export class BehaviorismoComponent implements OnInit {
  constructor(
    public aprendizagemInformatica: AprendizagemEInformaticaService,
    public ltiService: ServiceAppService
  ) {
    let bloqueio = localStorage.getItem('bloqueio');
    this.ltiService.bloqueio = bloqueio ? JSON.parse(bloqueio) : undefined;
  }
  ngOnInit(): void {
    this.ltiService.controlAtividade = 1
  }
  teste = 1;
  nome = 'Behaviorismo';
  arrayReferenciasTeste = [
    {
      tituloLivro: 'Behaviorismo Radical: Crítica e Metacrítica',
      nome_autor: 'Kester Carrara',
      caminho_imagem: 'Livro 1',
    },
  ];
  arrayReferencias: string[] = [
    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',
    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',
    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',

    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',
    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',
    'CARRARA, Kester Carrara. Behaviorismo Radical: Crítica e Metacrítica. 2. ed. São Paulo: Editora Unesp, 2005. 440 p. ISBN 978-85-393-0285-7',
  ];
  arrayLinks: string[] = [
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
    'https://br.search.yahoo.com/search?fr=mcafee&type=E210BR91199G0&p=saiba+mais+uea',
  ];

  arrayVideos: string[] = [
    'https://www.youtube.com/embed/c6kVJNkAeH4?si=78pwIHKZf_PDQuW_',
    'https://www.youtube.com/embed/Vh8oOY0v9bg?si=_9t9bhiKjef2VgWK',
  ];
  pergunta: string =
    'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?';

  controllerSwitch: number = 0;

  atividadeClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 1 : 0;
  }

  referenciasClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 2 : 0;
  }

  linksClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 3 : 0;
  }

  textoApoioClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 4 : 0;
  }

  minhaQuestao = {
    titulo:
      'Aprendemos na aula anterior que existem três passos principais para definir uma boa estratégia. Quais são eles?',
    alternativas: [
      {
        descricao: 'Azul',
        explicacao:
          'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        correta: false,
      },
      {
        descricao: 'Vermelho',
        explicacao:
          'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        correta: false,
      },
      {
        descricao: 'Verde',
        explicacao:
          'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        correta: true,
      },
      {
        descricao: 'Laranja',
        explicacao:
          'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis.',
        correta: false,
      },
    ],
    respostaCorreta: 'Verde',
  };
}

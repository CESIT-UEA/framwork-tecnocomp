import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Questao } from './questao';
import { HttpClient } from '@angular/common/http';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css'],
})
export class AtividadeComponent {
  caminhoImagem: string = '../../../../../assets/img/Letra ';
  respostaEnviada = false;
  respostaCorretaEnviada = false;
  nota = 0;
  @Output() atividadeClick = new EventEmitter<void>();
  @Input() questao: Questao | null = null;
  questaoAtual: Questao | null = null;
  resposta: string | null = null;
  @Input() gradeIn = true;
  @Input() bloqueio: boolean = false;
  @Input() idTopico!: number;
  tokenStorage = localStorage.getItem('token');
  tokenData: any;

  constructor(
    private http: HttpClient,
    private ltiService: ServiceAppService
  ) {}

  ngOnInit() {
    this.questaoAtual = this.questao;
    if (this.questaoAtual) {
      this.questaoAtual.alternativas = this.embaralharAlternativas(this.questaoAtual.alternativas);
      let respostaCorreta = this.questaoAtual.alternativas.find(a => a.correta);
      if (respostaCorreta) {
        this.questaoAtual.respostaCorreta = respostaCorreta.descricao;
      }
    }
  }

  responder(resposta: string) {
    if (this.respostaEnviada || this.respostaCorretaEnviada) {
      return;
    }

    if (this.questaoAtual!.respostaCorreta == resposta) {
      this.respostaCorretaEnviada = true;
      console.log('Resposta certa');
      console.log(this.questaoAtual?.respostaCorreta)

      this.nota = 100 / this.ltiService.quantidadeTopicos;
      if (this.ltiService.notaTotal == 0) {
        this.ltiService.notaTotal = this.nota;
      } else {
        this.ltiService.notaTotal = this.ltiService.notaTotal + this.nota;
      }
      this.ltiService.liberar(this.idTopico).subscribe(
        (response) => {
          console.log('Proximo tópico liberado com sucesso', response);
        },
        (error) => {
          console.error('Erro ao enviar a liberação', error);
        }
      );

      this.http
        .get(`http://localhost:3000/api/userInfo?ltik=${this.tokenStorage}`)
        .subscribe(
          (data) => {
            console.log('Log do data da atividade');
            this.tokenData = data;
            this.ltiService.bloqueio = this.tokenData.userTopico;
            this.ltiService.informacoes = this.tokenData;
            console.log(this.tokenData);
          },
          (error) => {
            console.error('Error:', error);
          }
        );

      console.log(this.ltiService.notaTotal);
      if (this.gradeIn) {
        console.log('Nota grade IN:', this.ltiService.notaTotal);
        this.ltiService.sendGradeIn(this.ltiService.notaTotal).subscribe(
          (response) => {
            console.log('Nota enviada com sucesso!', response);
            alert('Nota enviada!');
          },
          (error) => {
            alert('Erro ao enviar a nota!');
            console.error('Erro ao enviar nota', error);
          }
        );
      } else {
        this.ltiService.sendGrade(this.ltiService.notaTotal).subscribe(
          (response) => {
            console.log('Nota enviada com sucesso!', response);
            alert('Nota enviada!');
          },
          (error) => {
            alert('Erro ao enviar a nota!');
            console.error('Erro ao enviar nota', error);
          }
        );
      }
      this.resposta = resposta;
      this.respostaEnviada = true;
    }
  }

  refazer() {
    if (this.questao) {
      this.questao.alternativas = this.embaralharAlternativas(this.questao.alternativas);
      let respostaCorreta = this.questao.alternativas.find(a => a.correta);
      if (respostaCorreta) {
        this.questao.respostaCorreta = respostaCorreta.descricao;
      }
    }
    this.resposta = null;
    this.respostaEnviada = false;
  }

  getExplicacao(resposta: string) {
    const alternativa = this.questaoAtual?.alternativas.find(
      (a) => a.descricao === resposta
    );
    return alternativa?.explicacao;
  }

  embaralharAlternativas(alternativas: { descricao: string, explicacao: string, correta: boolean }[]) {
    let alternativasEmbaralhadas = [...alternativas];
    for (let i = alternativasEmbaralhadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativasEmbaralhadas[i], alternativasEmbaralhadas[j]] = [alternativasEmbaralhadas[j], alternativasEmbaralhadas[i]];
    }
    return alternativasEmbaralhadas;
  }
}

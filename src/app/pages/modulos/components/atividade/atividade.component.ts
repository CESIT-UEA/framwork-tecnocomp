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

  constructor(
    private http: HttpClient,
    private ltiService: ServiceAppService
  ) {}

  ngOnInit() {
    this.questaoAtual = this.questao;
  }

  responder(resposta: string) {
    if (this.respostaEnviada || this.respostaCorretaEnviada) {
      return;
    }

    if (this.questaoAtual!.respostaCorreta === resposta) {
      this.respostaCorretaEnviada = true;
      console.log("Resposta certa")
      this.nota = (100 / this.ltiService.quantidadeTopicos)
      if (this.ltiService.notaTotal == 0) {
        this.ltiService.notaTotal = this.nota
      }else{
        this.ltiService.notaTotal = this.ltiService.notaTotal + this.nota
      }
      console.log(this.ltiService.notaTotal)
    } else {
      this.embaralharAlternativas(this.questaoAtual!.alternativas);
      this.ltiService.notaTotal = this.ltiService.notaTotal + 0;
      console.log("Resposta errada")
    }

    if(this.gradeIn){
      console.log("Nota grade IN:",this.ltiService.notaTotal)
      this.ltiService.sendGradeIn(this.ltiService.notaTotal).subscribe(
        (response) => {
          console.log('Nota enviada com sucesso!', response);
          alert("Nota enviada!")
        },
        (error) => {
          alert("Erro ao enviar a nota!")
          console.error('Erro ao enviar nota', error);
        }
      );
    }else{
      this.ltiService.sendGrade(this.ltiService.notaTotal).subscribe(
        (response) => {
          console.log('Nota enviada com sucesso!', response);
          alert("Nota enviada!")
        },
        (error) => {
          alert("Erro ao enviar a nota!")
          console.error('Erro ao enviar nota', error);
        }
      );
    }
    this.resposta = resposta;
    this.respostaEnviada = true;
  }

  refazer() {
    this.questaoAtual = this.questao;
    this.resposta = null;
    this.respostaEnviada = false;
  }

  getExplicacao(resposta: string) {
    const alternativa = this.questaoAtual?.alternativas.find(
      (a) => a.letra === resposta
    );
    return alternativa?.explicacao;
  }

  embaralharAlternativas(alternativas: { letra: string, descricao: string, explicacao: string, correta: boolean }[]) {
    for (let i = alternativas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
    }
  }
}

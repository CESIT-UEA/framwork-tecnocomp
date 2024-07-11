import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Questao } from './questao';
import { HttpClient } from '@angular/common/http';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Componente reutilizavel de atividade
 */
@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css'],
})
export class AtividadeComponent {
  /**
   * Variavel que guarda o caminho das imagens das alternativas
   */
  caminhoImagem: string = '../../../../../assets/img/Letra ';

  /**
   * Variavel booleana para guardar se a resposta foi enviada ou não. Por padrão começa com não
   */
  respostaEnviada: boolean = false;

  /**
   * Variavel booleana para guardar se a resposta correta foi enviada ou não. Por padrão começa com não
   */
  respostaCorretaEnviada: boolean = false;

  /**
   * Variavel que guarda o valor da nota, por padrão começa com 0
   */
  nota: number = 0;

  /**
   * Variavel responsavel por guardar o evento que será utilizado, especificado ao instanciar o componente
   */
  @Output() atividadeClick = new EventEmitter<void>();

  /**
   * Variavel do tipo Questão ou null, responsavel por guardar a questão, por padrão ela começa sendo null caso não seja enviado as questões como parametro ao instanciar o componente
   */
  @Input() questao: Questao | null = null;

  /**
   * Variavel do tipo Questão ou null, responsavel por guardar apenas a questão atual
   */
  questaoAtual: Questao | null = null;

  /**
   * Variavel do tipo Questão ou null, responsavel por guardar apenas a resposta
   */
  resposta: string | null = null;

  /**
   * Variavel do tipo booleano, para informar se é gradeIn ou não
   */
  @Input() gradeIn = true;

  /**
   * Variavel do tipo boolean, responsavel por guardar se esta bloqueado ou não
   */
  @Input() bloqueio: boolean = false;

  /**
   * Variavel do tipo number, responsavel por guardar o idTopico
   */
  @Input() idTopico!: number;
  /**
   * Variavel responsavel por guardar o token a qual foi armazenado no localStorage
   */
  tokenStorage = localStorage.getItem('token');

  /**
   * Variavel por guardar as informações vindas da API, apenas para teste e vizualização
   */
  tokenData: any;

  /**
   * @constructor
   */
  constructor(
    private http: HttpClient,
    private ltiService: ServiceAppService
  ) {}

  /**
   * @method
   */
  ngOnInit() {
    this.questaoAtual = this.questao;
    if (this.questaoAtual) {
      this.questaoAtual.alternativas = this.embaralharAlternativas(
        this.questaoAtual.alternativas
      );
      let respostaCorreta = this.questaoAtual.alternativas.find(
        (a) => a.correta
      );
      if (respostaCorreta) {
        this.questaoAtual.respostaCorreta = respostaCorreta.descricao;
      }
    }
  }

  /**
   * @method
   * Metódo responsavel pela resposta da atividade
   */
  responder(resposta: string) {
    if (this.respostaEnviada || this.respostaCorretaEnviada) {
      return;
    }

    if (this.questaoAtual!.respostaCorreta == resposta) {
      this.respostaCorretaEnviada = true;
      console.log('Resposta certa');
      console.log(this.questaoAtual?.respostaCorreta);
      console.log( this.ltiService.quantidadeTopicos)
      this.nota = Math.ceil(100 / this.ltiService.quantidadeTopicos);

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
    } else {
      alert('Resposta errada, clique em refazer para tentar novamente');
    }
    console.log('ola mundo', this.ltiService.notaTotal);
  }

  /**
   * @method
   * Metodo responsavel pelo funcionamento do clique em refazer
   */
  refazer() {
    if (this.questao) {
      this.questao.alternativas = this.embaralharAlternativas(
        this.questao.alternativas
      );
      let respostaCorreta = this.questao.alternativas.find((a) => a.correta);
      if (respostaCorreta) {
        this.questao.respostaCorreta = respostaCorreta.descricao;
      }
    }
    this.resposta = null;
    this.respostaEnviada = false;
  }

  /**
   * @method
   * Metodo responsavel por puxar a explicação que fica na questão
   */
  getExplicacao(resposta: string) {
    const alternativa = this.questaoAtual?.alternativas.find(
      (a) => a.descricao === resposta
    );
    return alternativa?.explicacao;
  }

  /**
   * @method
   * Metódo responsavel pelo embaralhamento das alternativas
   */
  embaralharAlternativas(
    alternativas: { descricao: string; explicacao: string; correta: boolean }[]
  ) {
    let alternativasEmbaralhadas = [...alternativas];
    for (let i = alternativasEmbaralhadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativasEmbaralhadas[i], alternativasEmbaralhadas[j]] = [
        alternativasEmbaralhadas[j],
        alternativasEmbaralhadas[i],
      ];
    }
    return alternativasEmbaralhadas;
  }
}

import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Questao } from './questao';
import { HttpClient } from '@angular/common/http';
import { ServiceAppService } from 'src/app/service-app.service';
import { ModuloService } from 'src/app/personalizavel/modulo.service';

/**
 * Componente reutilizavel de atividade
 */
@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css'],
})
export class AtividadeComponent implements OnInit, OnChanges {
  teste: any;
  @Input() gradeIn = true;
  @Input() bloqueio: any = false;
  @Input() idTopico!: number;
  @Output() atividadeClick = new EventEmitter<void>();

  caminhoImagem: string = '../../../../../assets/img/Letra ';
  respostaEnviada: boolean = false;
  respostaCorretaEnviada: boolean = false;
  nota: number = 0;
  resposta: string | null = null;
  tokenStorage: any;
  tokenData: any;
  questao: any | null = null;
  quantidadeTopicos:any = []
  constructor(
    private http: HttpClient,
    public ltiService: ServiceAppService,
    public moduloService: ModuloService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    console.log("Bloqueio ta aqui")
    console.log(this.teste?.userTopico?.[this.idTopico]?.UsuarioTopicos[0].encerrado)
    if (this.teste) {
      this.teste = JSON.parse(this.teste);
      this.quantidadeTopicos = this.teste.topicos
      this.ltiService.quantidadeTopicos = this.quantidadeTopicos.length
      this.tokenStorage = this.teste.user.ltik
    }
    if (this.idTopico === this.quantidadeTopicos.length - 1) {
      this.gradeIn = false
    }
    this.atualizarQuestao();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['idTopico']) {
      this.atualizarQuestao();
    }
  }

  atualizarQuestao() {
    this.questao = this.teste?.topicos?.[this.idTopico]?.Exercicios?.[0];
    if (this.questao && Array.isArray(this.questao.Alternativas)) {
      this.questao.Alternativas = this.embaralharAlternativas(this.questao.Alternativas);
      const respostaCorreta = this.questao.Alternativas.find((a: any) => a.correta);
      if (respostaCorreta) {
        this.questao.respostaCorreta = respostaCorreta.descricao;
      }
    }
    this.cd.detectChanges();
  }

  responder(resposta: string) {

    if (this.bloqueio[this.idTopico]?.encerrado == true || this.respostaCorretaEnviada){
      return
    }else if (this.questao && this.questao.respostaCorreta === resposta) {
      this.tratarRespostaCorreta(resposta);
    } else {
      alert('Resposta errada, clique em refazer para tentar novamente');
    }
  }

  responderAlternativo(resposta: string) {
    this.resposta = resposta;
    this.respostaEnviada = true;
  }

  refazer() {
    if (this.questao && Array.isArray(this.questao.Alternativas)) {
      this.questao.Alternativas = this.embaralharAlternativas(this.questao.Alternativas);
      const respostaCorreta = this.questao.Alternativas.find((a: any) => a.correta);
      if (respostaCorreta) {
        this.questao.respostaCorreta = respostaCorreta.descricao;
      }
    }
    this.resposta = null;
    this.respostaEnviada = false;
  }

  getExplicacao(resposta: string) {
    const alternativa = this.questao?.Alternativas.find((a: any) => a.descricao === resposta);
    return alternativa?.explicacao;
  }

  embaralharAlternativas(alternativas: any[]) {
    let alternativasEmbaralhadas = [...alternativas];
    for (let i = alternativasEmbaralhadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativasEmbaralhadas[i], alternativasEmbaralhadas[j]] = [alternativasEmbaralhadas[j], alternativasEmbaralhadas[i]];
    }
    return alternativasEmbaralhadas;
  }

  private tratarRespostaCorreta(resposta: string) {
    this.respostaCorretaEnviada = true;
    this.nota = Math.ceil(100 / this.ltiService.quantidadeTopicos);
    console.log(this.nota)
    console.log(this.ltiService.notaTotal)
    console.log(this.nota + this.ltiService.notaTotal)
    this.ltiService.notaTotal = this.ltiService.notaTotal == 0 ? this.nota : this.ltiService.notaTotal + this.nota;

    this.liberarProximoTopico();
    this.enviarNota();
    this.obterInformacoesUsuario();
    this.resposta = resposta;
    this.respostaEnviada = true;
  }

  private liberarProximoTopico() {
    this.ltiService.liberar(this.teste?.topicos?.[this.idTopico].id).subscribe(
      response => console.log('Proximo tópico liberado com sucesso', response),
      error => console.error('Erro ao enviar a liberação', error)
    );
  }

  private obterInformacoesUsuario() {
    this.http.get(`${this.ltiService.apiUrl}/userInfo?ltik=${this.tokenStorage}`).subscribe(
      data => {
        this.tokenData = data;
        this.ltiService.bloqueio = this.tokenData.userTopico;
        this.ltiService.informacoes = this.tokenData;
        localStorage.setItem(
          'bloqueio',
          JSON.stringify(this.tokenData.userTopico)
        );
        //!Importante
        localStorage.setItem(
          'dados_completos_do_modulo',
          JSON.stringify(this.tokenData)
        );
      },
      error => console.error('Error:', error)
    );
  }

  private enviarNota() {
    const enviarNota = this.gradeIn ? this.ltiService.sendGradeIn : this.ltiService.sendGrade;
    enviarNota.call(this.ltiService, this.ltiService.notaTotal).subscribe(
      response => {
        console.log('Nota enviada com sucesso!', response);
        alert('Nota enviada!');
      },
      error => {
        alert('Erro ao enviar a nota!');
        console.error('Erro ao enviar nota', error);
      }
    );
  }
}

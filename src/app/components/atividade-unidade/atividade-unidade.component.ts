import { Component, Input } from '@angular/core';

/**
 * Componente reutilizavel que contém a atividade da unidade
 */
@Component({
  selector: 'app-atividade-unidade',
  templateUrl: './atividade-unidade.component.html',
  styleUrls: ['./atividade-unidade.component.css'],
})
export class AtividadeUnidadeComponent {
  /**
   * Variavel que guarda o titulo da pergunta
   */
  @Input() tituloPergunta: any = '';
  /**
   * Variavel que é um array de objetos que contem as alternativas, contendo sua descrição e se ela é a correta ou não
   */
  @Input() alternativas = [
    {
      descricao: '',
      correto: false,
    },
  ];
  /**
   * Variavel que é um array de strings que contém o caminho das imagens das alternativas, de A até D assim como a imagem de certo ou errado
   */
  imgsAlternativas: string[] = [
    'assets/img/Letra A.png',
    'assets/img/Letra B.png',
    'assets/img/Letra C.png',
    'assets/img/Letra D.png',
    'assets/img/correto.png',
    'assets/img/errado.png',
  ];

  /**
   * Variavel que guarda a resposta escolhida
   */
  alternativaEscolhida?: number;

  /**
   * @method
   * Um método feito para testar caso seja clicado
   */
  public clickTeste(indice: number) {
    this.alternativaEscolhida = indice;
  }

  /**
   * @method
   * Um método feito para testar caso caia na condição correta
   */
  condicao() {
    return this.imgsAlternativas[4];
  }
}

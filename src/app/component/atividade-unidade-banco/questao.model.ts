/**
 * Classe responsavel pela padronização da questão
 */
export class Questao {
  /**
   * @constructor
   */
  constructor(
    /**
     * Variavel que guarda o titulo da questão
     */
    public titulo: string,
    /**
     * Alternativas que a questão possui
     */
    public alternativas: Alternativa[],
    /**
     * Variavel a qual define qual alternativa é a correta
     */
    public respostaCorreta: number
  ) {}
}

/**
 * Classe responsavel pela padronização das alternativas
 */
export class Alternativa {
  /**
   * Variavel responsavel para definir como padrão que a explicação da alternativa é escondida, apenas quando verdadeiro que será mostrada
   */
  explicacaoVisivel = false;
  /**
   * @constructor
   */
  constructor(
    /**
     * Variavel responsavel para guardar descricao da alternativa
     */
    public descricao: string,
    /**
     * Variavel responsavel para guardar a explicacao da alternativa
     */
    public explicacao: string
  ) {}
}

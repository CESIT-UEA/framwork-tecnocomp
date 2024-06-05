/**
 * @interface
 * Interface da questão, contendo um titulo, alternativas, as quais é um vetor de objetos, e a resposta correta
 */
export interface Questao {
  /**
   * Titulo
   */
  titulo: string;
  /**
   * Vetot de objetos
   */
  alternativas: { descricao: string; explicacao: string; correta: boolean }[];
  /**
   * Resposta correta
   */
  respostaCorreta: string;
}

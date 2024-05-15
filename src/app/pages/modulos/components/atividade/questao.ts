export interface Questao {
  titulo: string;
  alternativas: { descricao: string, explicacao: string, correta: boolean }[];
  respostaCorreta: string;
}



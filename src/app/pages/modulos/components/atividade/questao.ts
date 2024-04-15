export interface Questao {
  titulo: string;
  alternativas: { letra: string, descricao: string, explicacao: string, correta: boolean }[];
  respostaCorreta: string;
}



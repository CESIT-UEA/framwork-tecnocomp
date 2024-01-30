export class Questao {
  constructor(
    public titulo: string,
    public alternativas: Alternativa[],
    public respostaCorreta: number
  ) {}
}

export class Alternativa {
  explicacaoVisivel = false;
  constructor(
    public descricao: string,
    public explicacao: string
  ) {}
}

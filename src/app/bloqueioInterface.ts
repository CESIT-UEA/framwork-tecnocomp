/**
 * @interface
 * Interface a qual padroniza o que o Bloqueio vai receber
 */
export interface Bloqueio {
  /**
   * Id do usuario
   */
  idUser: number;

  /**
   * Id do tópico
   */
  idTopico: number;
  /**
   * Variavel que guarda se este tópico foi finalizado ou não
   */
  encerrado: boolean;

  /**
   * @ignore
   */
  createdAt: Date;
  /**
   * @ignore
   */
  updatedAt: Date;
}

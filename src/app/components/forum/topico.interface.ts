/**
 * @interface
 * Interface de um tópico do forum
 */
export interface Topico {
  /**
   * id do tópico do forum
   */
  idTopico: number;
  /**
   * titulo do topico
   */
  tituloTopico: Text;
  /**
   * id do modulo a qual faz parte este topico
   */
  idModulo: number;
  /**
   * data de criação do topico
   */
  createdAt: Date;
  /**
   * data de alteração do topico
   */
  updatedAt: Date;
}

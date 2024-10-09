import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente dos botões que ficam na pagina inicial do modulo
 */
@Component({
  selector: 'app-botoes-section',
  templateUrl: './botoes-section.component.html',
  styleUrls: ['./botoes-section.component.css'],
})
export class BotoesSectionComponent {
  /**
   * Variáveis filha que guarda a url da unidade inicial do modulo
   */
  @Input() urlInicio!: string;

  /**
   * Variavel que guarda o nome do ebook
   */
  @Input() nome_ebook!: string;

  /**
   * Variavel que guarda o caminho para o donwoload do ebook
   */
  @Input() caminho_ebook!: string;

  /**
   * @method
   * Constructor do componente de Botões, que utiliza o Router
   */
  constructor(private router: Router) {}

  /**
   * @method
   */

}

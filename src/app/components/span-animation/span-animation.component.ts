import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpanAnimationTextoComponent } from '../span-animation-texto/span-animation-texto.component';

/**
 * Componente para testar caixa de span
 */
@Component({
  selector: 'app-span-animation',
  templateUrl: './span-animation.component.html',
  styleUrls: ['./span-animation.component.css'],
})
export class SpanAnimationComponent {
  /**
   * @constructor
   */
  constructor(public dialog: MatDialog) {}
  /**
   * Variavel responsavel por guardar o nome do botão, obrigatoroio de ser passado ao instanciar o componente
   */
  @Input({ required: true }) nome_button: string | undefined;
  /**
   * Variavel responsavel por guardar o nome do icon
   */
  @Input() nome_icon: string | undefined;

  /**
   * @method
   * Metodo da biblioteca dialog
   */
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    /**
     * @method
     * Metodo da biblioteca dialog, responsavel por abrir a janela de span, definir as animações de saída e entrada, além do tamanho da janela
     */
    this.dialog.open(SpanAnimationTextoComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

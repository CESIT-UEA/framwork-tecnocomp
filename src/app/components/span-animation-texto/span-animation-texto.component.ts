import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SpanAnimationComponent } from '../span-animation/span-animation.component';

/**
 * Componente de spin de animação
 */
@Component({
  selector: 'app-span-animation-texto',
  templateUrl: './span-animation-texto.component.html',
  styleUrls: ['./span-animation-texto.component.css'],
})
export class SpanAnimationTextoComponent {
  /**
   * @constructor
   */
  constructor(public dialogRef: MatDialogRef<SpanAnimationComponent>) {}
}

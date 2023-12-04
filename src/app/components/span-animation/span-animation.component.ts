import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpanAnimationTextoComponent } from '../span-animation-texto/span-animation-texto.component';

@Component({
  selector: 'app-span-animation',
  templateUrl: './span-animation.component.html',
  styleUrls: ['./span-animation.component.css']
})
export class SpanAnimationComponent {
  constructor(public dialog: MatDialog) {}
  @Input({required:true}) nome_button:string | undefined;
  @Input() nome_icon:string | undefined;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SpanAnimationTextoComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {
  @Output() atividadeClick = new EventEmitter<void>();
}

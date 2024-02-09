import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Questao } from 'src/app/component/atividade-unidade-banco/questao.model';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {
  @Input() titulo_pergunta!:string
  @Output() atividadeClick = new EventEmitter<void>();
  @Input() questoes:any
}

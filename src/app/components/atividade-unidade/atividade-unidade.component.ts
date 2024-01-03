import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atividade-unidade',
  templateUrl: './atividade-unidade.component.html',
  styleUrls: ['./atividade-unidade.component.css']
})
export class AtividadeUnidadeComponent {
  @Input() tituloPergunta:any = ''
  @Input() alternativas =
  [
    {
      nome: '',
      descricao:'',
      correto:false
    }
  ]
}

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
      descricao:'',
      correto:false
    }
  ]
  imgsAlternativas: string[] = [
    'assets/img/Letra A.png',
    'assets/img/Letra B.png',
    'assets/img/Letra C.png',
    'assets/img/Letra D.png',
    'assets/img/correto.png',
    'assets/img/errado.png'
  ]

  alternativaEscolhida?:number

  public clickTeste(indice:number){
    this.alternativaEscolhida = indice
  }

  condicao(){
    return this.imgsAlternativas[4]
  }
}

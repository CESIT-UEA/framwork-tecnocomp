import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botoes-section',
  templateUrl: './botoes-section.component.html',
  styleUrls: ['./botoes-section.component.css']
})
export class BotoesSectionComponent {
  /**
   * Variáveis filhas inicializadas para receber url, nome de ebook e o caminho no componente home
   */
  @Input() urlInicio!:string
  @Input() nome_ebook!:string
  @Input() caminho_ebook!:string

  constructor(private router:Router){}
   /**
   * @method
   */
  iniciarNavegacao(){
    return this.router.navigate([this.urlInicio]);
  }
}

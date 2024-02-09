import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botoes-section',
  templateUrl: './botoes-section.component.html',
  styleUrls: ['./botoes-section.component.css']
})
export class BotoesSectionComponent {
  @Input() urlInicio!:string
  @Input() nome_ebook!:string
  @Input() caminho_ebook!:string

  constructor(private router:Router){}

  iniciarNavegacao(){
    return this.router.navigate([this.urlInicio]);
  }
}

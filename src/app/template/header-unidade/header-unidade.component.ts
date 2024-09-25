import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Componente do Header Unidade, o qual deve ser utilizado em cada unidade (topico) de um modulo
 */
@Component({
  selector: 'app-header-unidade',
  templateUrl: './header-unidade.component.html',
  styleUrls: ['./header-unidade.component.css'],
})
export class HeaderUnidadeComponent implements OnInit{
  /**
   * @method
   * Constructor do componente HeaderUnidade, o qual importa o Router e o ServiceAppService
   */
  constructor(private appService: ServiceAppService, private router: Router) {}

  tokenData:any
  /**
   * Variavel o qual guarda se o menu esta aberto ou não, por padrão ele já começa fechado (false)
   */
  isOpen = false;

  ngOnInit(): void {
    this.tokenData = localStorage.getItem('dados_completos_do_modulo');
    if (this.tokenData) {
      this.tokenData = JSON.parse(this?.tokenData);
      console.log('Token data: ', this?.tokenData);
    }
  }

  nome(){
    let iniciais: string = this.tokenData.user.nome;
    let partesNome: string[] = iniciais.toUpperCase().split(' ');  // Divide o nome em partes
    let iniciaisConcatenadas: string = partesNome.map(parte => parte[0]).join('');  // Pega a primeira letra de cada parte e concatena
    return iniciaisConcatenadas;

  }
  /**
   * @method
   * Controla a alternância da barra de lateral
   */
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  /**
   * @method
   * Metódo para a alternancia dos icons
   */
  menuClick() {
    if (this.menuHeader == 'menu') {
      this.menuHeader = 'close';
    } else {
      this.menuHeader = 'menu';
    }
  }

  /**
   * Por padrão, o icone já começa com o de menu
   */
  menuHeader = 'menu';

}

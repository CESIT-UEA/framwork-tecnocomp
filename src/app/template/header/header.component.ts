import { Component, Input, OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Componente do Header de pagina inicial do Modulo
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() nome!:string;

  /**
   * @method
   * Constructor do componente Header, ele importa o ServiceAppService para utiliza-lo
   */
  constructor(public appService: ServiceAppService) {}
  ngOnInit(): void {
    if (this.nome) {
      let words = this.nome.split('-');
      let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      let result = capitalizedWords.join(' ');
      this.nome = result
    }
  }

  /**
   * @method
   * Controla a navegação da página HOME com a ficha técnica
   */
  clickHeader() {
    if (this.appService.controllerSwitchHome == 0) {
      return (this.appService.controllerSwitchHome = 1);
    } else {
      return (this.appService.controllerSwitchHome = 0);
    }
  }

  /**
   * Vetor que guarda os tópicos do modulo
   */
  unidades: string[] = [
    'Teorias da Aprendizagem',
    'TDICs',
    'EDUCAÇÃO  4.0',
    'Projeto Aprendizagem e Informatica',
  ];

  /**
   * Vetor que guarda os links dos tópicos do modulo
   */
  unidadesLinks: string[] = [
    '/teorias-da-aprendizagem',
    'TDICs',
    'EDUCAÇÃO  4.0',
    'Projeto Aprendizagem e Informatica',
  ];

  /**
   * Variavel de controle sobre o menu
   */
  isOpen = false;

  /**
   * @method
   * Controla a alternância da barra de lateral
   */
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  /**
   * @method
   * Controla a alternância do icone de menu, para aberto e fechado
   */
  menuClick() {
    if (this.menuHeader == 'menu') {
      this.menuHeader = 'close';
    } else {
      this.menuHeader = 'menu';
    }
  }

  /**
   * Inicialização da variavel que guarda o nome do icon
   */
  menuHeader = 'menu';
}

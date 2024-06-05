import { Component } from '@angular/core';
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
export class HeaderUnidadeComponent {
  /**
   * @method
   * Constructor do componente HeaderUnidade, o qual importa o Router e o ServiceAppService
   */
  constructor(private appService: ServiceAppService, private router: Router) {}

  /**
   * Vetor o qual guarda o nome das unidades
   */
  listaDeUnidades: string[] = [
    'Behaviorismo',
    'Construtivismo',
    'Socioconstrutivismo',
    'Construcionismo',
  ];

  /**
   * Vetor o qual guarda o link para ir até as unidades listadas acima
   */
  listaDeUnidadesLinks: string[] = [
    '/teorias-da-aprendizagem',
    '/teorias-da-aprendizagem/construtivismo',
    '/teorias-da-aprendizagem/socioconstrutivismo',
    '/teorias-da-aprendizagem/construcionismo',
  ];

  /**
   * Variavel o qual guarda se o menu esta aberto ou não, por padrão ele já começa fechado (false)
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

  /**
   * @method
   * Metodo para navegar para a pagina inicial do modulo
   */
  navegarParaRota() {
    this.router.navigate([`${this.appService.urlInicio}`]);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

/**
 * Classe responsavel pelo carregamento dos videos, mas seu funcinamento era ser um componente reutilizavel com o objetivo de ser o slide do texto de apoio
 */
@Component({
  selector: 'app-slide-unidade',
  templateUrl: './slide-unidade.component.html',
  styleUrls: ['./slide-unidade.component.css'],
})
export class SlideUnidadeComponent implements OnInit {
  constructor(private ltiService: ServiceAppService) {}
  /**
   * Array de links de videos, a qual é uma variavel que recebe um array string ao instanciar este componente, e ele é obrigatório
   */
  @Input({ required: true }) videos!: any[];
  videosString!: string[]

  ngOnInit(): void {
    console.log("Ola mundo")
    for (const values of this.videos) {
      console.log("Videos: ",values.url)
    }
  }

  /**
   * Variavel responsavel por guardar o indice do video que será exibido, por padrão começa com 0, pelo link do video em primeiro do vetor acima
   */
  currentVideoIndex: number = 0;

  /**
   * @method
   * Metódo responsavel por poder selecionar na interface qual video será exibido
   */
  selectVideo(index: number) {
    this.ltiService.controlAtividade = this.ltiService.controlAtividade + 1;
    console.log(this.ltiService.controlAtividade);
    this.startLoading();
    this.currentVideoIndex = index;
  }

  /**
   * Variavel responsavel por guardar se esta havendo carregamento
   */
  isLoading = false;

  /**
   * @method
   * Metódo responsavel por dar um delay de 1s ao trocar para outro video
   */
  startLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}

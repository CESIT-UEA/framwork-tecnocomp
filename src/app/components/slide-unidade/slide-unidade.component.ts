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
  constructor(public ltiService: ServiceAppService) {}
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
   * @method
   * Metódo responsavel por poder selecionar na interface qual video será exibido
   */
  selectVideo(index: number) {
    this.startLoading();

    // Atualiza imediatamente o índice para o vídeo selecionado
    this.ltiService.currentVideoIndex = index;

    // Verifica se o vídeo anterior foi concluído
    if (this.videos[index].UsuarioVideos[0].completo === false) {
      this.ltiService.finalizarVideo(
        this.ltiService.dados_completos.user.ltiUserId,
        this.videos[index].id,
        this.ltiService.dados_completos.user.ltik
      ).subscribe(
        (response) => {
          console.log('Vídeo finalizado e dados atualizados:', response);
          this.ltiService.removeDadosCompletos();
          this.ltiService.setDadosCompletos(response); // Atualiza os dados completos no localStorage
        },
        (error) => {
          console.error('Erro ao finalizar vídeo:', error);
        }
      );
    }

    // Garante que a interface seja atualizada após a mudança de vídeo
    this.startLoading(); // Simula carregamento após troca de vídeo
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

import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ModuloService } from 'src/app/personalizavel/modulo.service';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-slide-unidade',
  templateUrl: './slide-unidade.component.html',
  styleUrls: ['./slide-unidade.component.css'],
})
export class SlideUnidadeComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading = false; // Indica se está carregando
  @Input({ required: true }) videos!: any[]; // Array de vídeos

  constructor(
    public ltiService: ServiceAppService,
    public moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    // Inicializa o estado inicial do vídeo
    this.ltiService.loadYouTubeAPI();
  }

  ngAfterViewInit(): void {
    // Recria o player ao montar o componente
    this.ltiService.recreatePlayer();
  }

  ngOnDestroy(): void {
    // Destroi o player ao desmontar o componente
    if (this.ltiService.player) {
      this.ltiService.player.destroy();
      this.ltiService.player = null;
    }
  }

  selectVideo(index: number): void {
    this.startLoading();
    this.ltiService.currentVideoIndex = index; // Atualiza o índice do vídeo

    // Atualiza o progresso do vídeo
    this.ltiService.salvarProgressoVideos().subscribe((response) => {
      console.log('Progresso salvo:', response);
      this.ltiService.removeDadosCompletos()
      this.ltiService.setDadosCompletos(response)
    });

    // Recria o player para o novo vídeo
    this.ltiService.recreatePlayer();
    this.stopLoading();
  }


  startLoading(): void {
    this.isLoading = true;
  }

  stopLoading(): void {
    this.isLoading = false;
  }

  getVerificaVideosAssistidos(): number {
    return this.videos.filter((video) => video.UsuarioVideos[0].completo).length;
  }
}

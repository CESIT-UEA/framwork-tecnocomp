import { ServiceAppService } from 'src/app/service-app.service';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuloService } from '../../modulo.service';
import { config } from 'rxjs';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.css'],
})
export class TopicoComponent implements OnInit {
  nomeModulo: string = '';
  nomeTopico!: string;
  teste: any;
  controllerSwitch = 'default'; // Inicialmente exibe o componente default
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  menu = false;


  constructor(
    private route: ActivatedRoute,
    public moduloService: ModuloService,
    private router: Router,
    public ltiService: ServiceAppService,
  ) {}

  ngOnInit(): void {
    this.ltiService.getDadosCompletos();
  }

  proximo(): void {
    this.ltiService.currentVideoIndex = 0;
    if (
      this.moduloService.controll_topico <
      this.ltiService.dados_completos.topicos.length - 1
    ) {
      if (
        this.ltiService.dados_completos.userTopico[
          this.moduloService.controll_topico
        ]?.UsuarioTopicos[0].encerrado
      ) {
        this.moduloService.controll_topico += 1;
      } else {
        this.ltiService.mensagem('Você precisa responder à atividade antes!');
      }
    }
  }
  voltarCss() {
    if (this.moduloService.controll_topico == 0) {
      return 'display:none';
    }

    return;
  }
  voltar(): void {
    if (this.moduloService.controll_topico > 0) {
      this.moduloService.controll_topico -= 1;
      this.ltiService.currentVideoIndex = 0;
    }
  }

  atividadeClick() {
    this.controllerSwitch =
      this.controllerSwitch == 'default' ? '1' : 'default';
  }

  referenciasClick() {
    this.controllerSwitch =
      this.controllerSwitch == 'default' ? '2' : 'default';
  }

  linksClick() {
    this.controllerSwitch =
      this.controllerSwitch == 'default' ? '3' : 'default';
  }

  textoApoioClick() {
    this.controllerSwitch =
      this.controllerSwitch == 'default' ? '4' : 'default';
  }

  fecharMenuClick() {
    this.sidenavContainer.close();
  }

  navegarModulo(topicoId: number) {
    console.log(topicoId);
    this.moduloService.controll_topico = topicoId;
    this.sidenavContainer.close();
  }

  verificaProximo() {
    let topicos: any[] = this.ltiService.dados_completos.topicos;

    if (
      this.moduloService.controll_topico >= 0 &&
      this.moduloService.controll_topico < topicos.length - 1
    ) {
      return true;
    }

    return false;
  }
  verificaVoltar() {
    let topicos: any[] = this.ltiService.dados_completos.topicos;

    if (
      this.moduloService.controll_topico > 0 &&
      this.moduloService.controll_topico <= topicos.length
    ) {
      return true;
    }

    return false;
  }
}

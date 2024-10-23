import { ServiceAppService } from 'src/app/service-app.service';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuloService } from '../../modulo.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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

  constructor(
    private route: ActivatedRoute,
    public moduloService: ModuloService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public ltiService: ServiceAppService
  ) {}

  ngOnInit(): void {
    this.ltiService.getDadosCompletos()
  }

  proximo(): void {
    let config = new MatSnackBarConfig();
    config.panelClass = 'testando'
    this.ltiService.currentVideoIndex = 0
    if (this.moduloService.controll_topico < this.ltiService.dados_completos.topicos.length - 1) {
      if (this.ltiService.dados_completos.userTopico[this.moduloService.controll_topico]?.UsuarioTopicos[0].encerrado) {
        this.moduloService.controll_topico += 1;
      }else{
        this._snackBar.open("Você precisa responder à atividade antes!","ok",config);
      }
    }
  }
  voltarCss(){
    if (this.moduloService.controll_topico == 0) {
      return 'display:none';
    }

    return
  }
  voltar(): void {
    if (this.moduloService.controll_topico > 0) {
      this.moduloService.controll_topico -= 1;
      this.ltiService.currentVideoIndex = 0
    }
  }

  atividadeClick() {
    this.controllerSwitch = this.controllerSwitch == 'default' ? '1' : 'default';
  }

  referenciasClick() {
    this.controllerSwitch = this.controllerSwitch == 'default' ? '2' : 'default';
  }

  linksClick() {
    this.controllerSwitch = this.controllerSwitch == 'default' ? '3' : 'default';
  }

  textoApoioClick() {
    this.controllerSwitch = this.controllerSwitch == 'default' ? '4' : 'default';
  }

  fecharMenuClick() {
    this.sidenavContainer.close();
  }

  navegarModulo(topicoId:number){
    console.log(topicoId)
    this.moduloService.controll_topico = topicoId
    this.sidenavContainer.close();
  }
}

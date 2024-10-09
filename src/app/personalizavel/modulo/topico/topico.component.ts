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
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    if (this.teste) {
      this.teste = JSON.parse(this.teste);
      console.log(this.teste);
      this.nomeModulo = `${this.moduloService.controll_topico + 1}. ${this.teste?.topicos?.[this.moduloService.controll_topico]?.nome_topico}`
      const topicoId = this.route.snapshot.queryParamMap.get('topicoId');
      if (topicoId && this.teste.topicos) {
        this.moduloService.controll_topico = this.teste.topicos.findIndex((topico: any) => topico.id == topicoId);
      }
    } else {
      console.error('Dados não encontrados no localStorage');
    }
  }

  proximo(): void {
    let config = new MatSnackBarConfig();
    config.panelClass = 'testando'
    if (this.moduloService.controll_topico < this.teste.topicos.length - 1) {
      if (this?.teste?.userTopico[this.moduloService.controll_topico]?.UsuarioTopicos[0].encerrado) {
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

import { ServiceAppService } from 'src/app/service-app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuloService } from '../../modulo.service';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.css'],
})
export class TopicoComponent implements OnInit {
  nomeModulo: string = '';
  nomeTopico!: string;
  controll_topico = 0;
  teste: any;
  controllerSwitch = 'default'; // Inicialmente exibe o componente default

  constructor(
    private route: ActivatedRoute,
    public moduloService: ModuloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    if (this.teste) {
      this.teste = JSON.parse(this.teste);
      console.log(this.teste);
      this.nomeModulo = `${this.controll_topico + 1}. ${this.teste?.topicos?.[this.controll_topico]?.nome_topico}`
      const topicoId = this.route.snapshot.queryParamMap.get('topicoId');
      if (topicoId && this.teste.topicos) {
        this.controll_topico = this.teste.topicos.findIndex((topico: any) => topico.id == topicoId);
      }
    } else {
      console.error('Dados não encontrados no localStorage');
    }
  }

  proximo(): void {
    if (this.controll_topico < this.teste.topicos.length - 1) {
      if (this.teste.userTopico[this.controll_topico].encerrado == true) {
        this.controll_topico += 1;
      }else{
        alert("Para liberar o próximo tópico, responda corretamente a atividade")
      }
    }
  }
  voltarCss(){
    if (this.controll_topico == 0) {
      return 'display:none';
    }

    return
  }
  voltar(): void {
    if (this.controll_topico > 0) {
      this.controll_topico -= 1;
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
}

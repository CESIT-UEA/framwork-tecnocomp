import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuloService } from '../../modulo.service';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.css'],
})
export class TopicoComponent implements OnInit {
  nomeModulo!: string;
  nomeTopico!: string;
  controll_topico = 0;
  teste: any;
  constructor(
    private route: ActivatedRoute,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    this.teste = JSON.parse(this.teste)
    console.log(this.teste);
  }
  proximo() {
    this.controll_topico += 1;
  }
  voltar() {
    this.controll_topico -= 1;
  }
}

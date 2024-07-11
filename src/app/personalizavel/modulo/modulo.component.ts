import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuloService } from '../modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css'],
})
export class ModuloComponent implements OnInit {
  nomeModulo!: string;
  nomeTopico!: string;
  tokenData: any;
  topico: any;
  teste:any

  constructor(
    private route: ActivatedRoute,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.teste = localStorage.getItem('dados_completos_do_modulo');
    this.teste = JSON.parse(this.teste)
    console.log(this.teste);

    const ltik = this.route.snapshot.queryParamMap.get('ltik');
    if (ltik) {
      this.moduloService.getUserInfo(ltik).subscribe(
        (data) => {
          this.tokenData = data;
          console.log(this.tokenData);

          this.moduloService.urlInicio =
            this.tokenData.modulo.nome_modulo + 'Home';
          localStorage.setItem(
            'bloqueio',
            JSON.stringify(this.tokenData.userTopico)
          );
          //!Importante
          localStorage.setItem(
            'dados_completos_do_modulo',
            JSON.stringify(this.tokenData)
          );

          localStorage.setItem('url_retorno', this.tokenData.user.return_url);
          localStorage.setItem(
            'topicos',
            JSON.stringify(this.tokenData.topicos)
          );

          let bloqueio = localStorage.getItem('bloqueio');
          this.moduloService.topicos = this.tokenData.topicos;

          this.moduloService.bloqueio = bloqueio
            ? JSON.parse(bloqueio)
            : this.tokenData.userTopico;

          this.moduloService.informacoes = this.tokenData;
          this.moduloService.quantidadeTopicos =
            this.tokenData.modulo.quantidadeTopicos;
          this.moduloService.notaTotal =
            this.tokenData.userModulo.notaAcumulada;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}

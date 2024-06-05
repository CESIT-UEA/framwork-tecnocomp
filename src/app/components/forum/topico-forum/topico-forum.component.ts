import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';
import { TopicoF } from './topico-forum.interface';
import { Topico } from '../topico.interface';

@Component({
  selector: 'app-topico-forum',
  templateUrl: './topico-forum.component.html',
  styleUrls: ['./topico-forum.component.css'],
})
export class TopicoForumComponent implements OnInit {
  id: number | undefined;
  forumTopicos: TopicoF[] = [];
  forum!: Topico | undefined;
  exibirFormulario = false;

  exibirFormularioClick() {
    this.exibirFormulario = true;
  }

  fecharFormulario() {
    this.exibirFormulario = false;
  }

  constructor(
    private route: ActivatedRoute,
    public ltiService: ServiceAppService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      // Verifica se id não é undefined antes de fazer a chamada para o serviço
      if (this.id !== undefined) {
        this.ltiService.getTopicoForum(this.id).subscribe(
          (response) => {
            this.forumTopicos = response.forumTopicos;
            this.forum = response.topicos;
            console.log(this.forumTopicos);
            console.log(response);
          },
          (error) => {
            console.error('Erro ao buscar tópicos do fórum:', error);
          }
        );
      }
    });
  }
}

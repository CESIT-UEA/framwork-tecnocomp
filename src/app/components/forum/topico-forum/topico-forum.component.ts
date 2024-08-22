import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';
import { TopicoF } from './topico-forum.interface';
import { Topico } from '../topico.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topico-forum',
  templateUrl: './topico-forum.component.html',
  styleUrls: ['./topico-forum.component.css'],
})
export class TopicoForumComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public ltiService: ServiceAppService,
    private location: Location,
    private router:Router
  ) {}

  forum_topico = new FormGroup({
    titulo: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required),
  });

  id: number | undefined;
  forumTopicos: TopicoF[] = [];
  forum!: Topico | undefined;
  exibirFormulario = false;
  id_forum_topico_escolhido: number = 0;

  load() {
    location.reload()
  }
  escolher_forum_topico(id: number) {
    return (this.id_forum_topico_escolhido = id);
  }

  sair_comentario() {
    this.id_forum_topico_escolhido = 0;
  }

  exibirFormularioClick() {
    this.exibirFormulario = true;
  }

  fecharFormulario() {
    this.exibirFormulario = false;
  }

  onSubmit() {
    let dados = Object.assign(this.forum_topico.value, this.forum, {
      idUser: this.ltiService.bloqueio[0].idUser,
    });
    console.log(this.ltiService.bloqueio);
    this.ltiService.criarPostagemTopico(dados).subscribe((response) => {
      console.log('Enviado com sucesso');
      this.load()
    });
  }

  ngOnInit(): void {
    let bloqueio = localStorage.getItem('bloqueio');
    this.ltiService.bloqueio = bloqueio ? JSON.parse(bloqueio) : [];

    this.route.params.subscribe((params) => {
      this.id = params['id'];

      // Verifica se id não é undefined antes de fazer a chamada para o serviço
      if (this.id !== undefined) {
        this.ltiService.getTopicoForum(this.id).subscribe(
          (response) => {
            this.forumTopicos = response.forumTopicos;
            this.forum = response.topico;
            console.log(response);
          },
          (error) => {
            console.error('Erro ao buscar tópicos do fórum:', error);
          }
        );
      }
    });
  }
  navegarParaRota() {
    this.router.navigate([`${this.ltiService.urlInicio}`]);
  }
  navegarParaRotaForum() {
    this.id_forum_topico_escolhido = 0;
    this.router.navigate(['forum']);
  }
}

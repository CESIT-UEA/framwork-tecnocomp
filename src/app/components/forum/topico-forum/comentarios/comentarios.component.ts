import { Component, Input, OnInit } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';
import { comentario } from './comentarios.interface';
import { TopicoF } from '../topico-forum.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() id:number = 0
  comentarios:comentario[] = []
  info_topico_atual:TopicoF | undefined
  id_user:number = 0

  comentario = new FormGroup({
    mensagem: new FormControl('', Validators.required),
  });

  constructor(private ltiService:ServiceAppService){}

  ngOnInit(): void {
    this.ltiService.getTopicoForumOne(this.id).subscribe(
      (response)=>{
        this.info_topico_atual = response.forumTopicos
        this.comentarios = response.comentarios
        this.id_user = response.userAtual.ltiUserId
        console.log(response)
      }
    )
  }
  load() {
    location.reload()
  }
  onSubmit() {
    let dados = Object.assign(this.comentario.value, {id_topico_forum: this.info_topico_atual?.id_topico_forum}, {id_autor_comentario: this.id_user});
    console.log(dados)

    this.ltiService.criarComentario(dados).subscribe((response) => {
      console.log('Comentário criado com sucesso');
      this.load()
      alert("Comentário criado com sucesso")
    });
  }

}

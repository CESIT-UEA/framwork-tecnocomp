import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit{
    formAva = new FormGroup({
        name: new FormControl(''),
        url: new FormControl('')
    });

    url_ava!: string;  
    lista_avas: any = []
    ngOnInit(): void {
        this.url_ava = localStorage.getItem('url_ava')!
        this.getListaAva()
    }

    getListaAva(){
        if(this.url_ava){
            this.lista_avas = JSON.parse(this.url_ava)
        } 
    }


    adicionarAva(){
        let name: string = this.formAva.value.name!
        let url: string = this.formAva.value.url!
        this.lista_avas.push({name, url})
        this.formAva.reset()
        this.atualizarListaAva()
    }

    excluirAva(index: number){
        console.log(index + " index do elemento clicado")
        this.lista_avas.splice(index, 1)
        this.atualizarListaAva()
    }

    atualizarListaAva(){
        this.url_ava = JSON.stringify(this.lista_avas)
        localStorage.removeItem('url_ava')
        localStorage.setItem('url_ava', this.url_ava)
        this.getListaAva()
    }

    limparListaAva(){
      localStorage.clear()
      this.lista_avas = []
    }
    
  }

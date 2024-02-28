import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent {
  cardEquipes = [
    {
      equipe:"COORDENAÇÃO GERAL",
      membros:[
        {
          cargo:"Coordenador",
          nome:"João da Mata"
        }
      ]
    },
    {
      equipe:"CONTEUDISTAS",
      membros:[
        {
          cargo:"Conteudista",
          nome:"Elisângela Oliveira"
        },
        {
          cargo:"Conteudista",
          nome:"Genarde Macedo"
        }
      ]
    },
    {
      equipe:"EQUIPE DESENVOLVEDOR",
      membros:[
        {
          cargo:"Desenvolvedor",
          nome:"Henrique Galvim"
        },
        {
          cargo:"Desenvolvedor",
          nome:"Kaue Wallace"
        }
      ]
    },
        {
      equipe:"DESIGNS",
      membros:[
        {
          cargo:"Design Instrucional",
          nome:"Jorge Mikael"
        },
        {
          cargo:"UX/UI Design",
          nome:"Livia Monteiro"
        },
        {
          cargo:"Design Gráfico",
          nome:"Ryan Pereira"
        }
      ]
    },
    {
      equipe:"VIDEOMAKER",
      membros:[
        {
          cargo:"videomaker",
          nome:"Ronaldo Ewerton"
        }
      ]
    },
    {
      equipe:"ESPECIALISTA H5P",
      membros:[
        {
          cargo:"Especialista H5P",
          nome:"Marcos Gabriel"
        }
      ]
    },
  ]
  currentVideoIndex: number = 0;
  teste = this.cardEquipes[this.currentVideoIndex]

  elementMembros(){
    return this.cardEquipes[this.currentVideoIndex].membros.length
  }

  nextVideo() {
    if (this.currentVideoIndex + 1 == this.cardEquipes.length) {
      this.currentVideoIndex = this.cardEquipes.length - 1

      return
    } else {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.cardEquipes.length;
    }
  }

  prevVideo() {
    if (this.currentVideoIndex == 0) {
      console.log("Oi")
    } else {
      this.currentVideoIndex = (this.currentVideoIndex - 1 + this.cardEquipes.length) % this.cardEquipes.length;
    }
  }

  selectVideo(index: number) {
    this.currentVideoIndex = index;
  }
}

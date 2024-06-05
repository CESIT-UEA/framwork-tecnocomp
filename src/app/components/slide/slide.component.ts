import { Component, Input } from '@angular/core';

/**
 * Componente depreciado, era responsavel por ser o slide do texto de apoio. É um componente reutilizavel
 */
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent {
  /**
   * Variavel responsavel por controlar os slides, por padrão começa pelo slide 0
   */
  controllerSwitch: number = 0;
  /**
   * @method
   * Metódo para iniciar a apresentação do slide
   */
  iniciarClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 1 : 0;
  }
  /**
   * Variavel responsavel por guardar o nome do topico, ao instanciar o componente pode ser passado o nome do topico, por padrão ele ja inicia com um nome de exemplo
   */
  @Input() nomeTopico: string = 'Behaviorismo';
  /**
   * Variavel responsavel por guardar o conteudo do slide, sendo uma vetor de objetos, que contém o titulo, o caminho da imagem e o conteudo textual
   */
  @Input() slide = [
    {
      titulo: 'Lorem Ipsum',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
      ],
    },
    {
      titulo: 'Lorem Ipsum 2',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
      ],
    },
    {
      titulo: 'Lorem Ipsum 3',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
      ],
    },
    {
      titulo: 'Lorem Ipsum 4',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
      ],
    },
    {
      titulo: 'Lorem Ipsum 5',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
      ],
    },
  ];
  /**
   * Variavel responsavel por guardar o indice do slide inicial
   */
  currentSlideIndex: number = 0;
  /**
   * Variavel responsavel por guardar o conteudo textual do slide atual
   */
  teste = this.slide[this.currentSlideIndex].texto;

  /**
   * @method
   * Metódo para passar para o proximo slide
   */
  nextVideo() {
    if (this.currentSlideIndex + 1 == this.slide.length) {
      this.currentSlideIndex = this.slide.length - 1;

      return;
    } else {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slide.length;
    }
  }

  /**
   * @method
   * Metódo para passar para o slide anterior
   */
  prevVideo() {
    if (this.currentSlideIndex == 0) {
      this.iniciarClick();
    } else {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slide.length) % this.slide.length;
    }
  }
}

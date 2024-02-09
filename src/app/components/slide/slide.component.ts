import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  controllerSwitch: number = 0
  iniciarClick() {
    this.controllerSwitch = this.controllerSwitch == 0 ? 1 : 0
  }
  @Input() nomeTopico:string = "Behaviorismo";
  @Input() slide = [
    {
      titulo: 'Lorem Ipsum',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.'
      ]
    },
    {
      titulo: 'Lorem Ipsum 2',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.'
      ],
    },
    {
      titulo: 'Lorem Ipsum 3',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.'
      ]
    },
    {
      titulo: 'Lorem Ipsum 4',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.'
      ]
    },
    {
      titulo: 'Lorem Ipsum 5',
      caminhoImagen: 'Lorem Ipsum',
      texto: [
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.',
        'Lorem ipsum dolor sit amet consectetur. Erat quis luctus sed semper volutpat congue turpis. Pellentesque nullam et nisi imperdiet. Magna aenean ullamcorper risus nibh tincidunt egestas. Elit egestas auctor dolor a a at pretium integer.'
      ]
    },
  ]

  currentVideoIndex: number = 0;
  teste = this.slide[this.currentVideoIndex].texto

  nextVideo() {
    if (this.currentVideoIndex + 1 == this.slide.length) {
      this.currentVideoIndex = this.slide.length - 1

      return
    } else {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.slide.length;
    }
  }

  prevVideo() {
    if (this.currentVideoIndex == 0) {
      this.iniciarClick()
    } else {
      this.currentVideoIndex = (this.currentVideoIndex - 1 + this.slide.length) % this.slide.length;
    }
  }
}

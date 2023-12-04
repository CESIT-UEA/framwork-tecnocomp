import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-slide-unidade',
  templateUrl: './slide-unidade.component.html',
  styleUrls: ['./slide-unidade.component.css']
})
export class SlideUnidadeComponent {
  @Input({required:true}) videos!: string[];
  currentVideoIndex: number = 0;

  selectVideo(index: number) {
    this.currentVideoIndex = index;
  }



}

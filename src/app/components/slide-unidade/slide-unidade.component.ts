import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-slide-unidade',
  templateUrl: './slide-unidade.component.html',
  styleUrls: ['./slide-unidade.component.css']
})
export class SlideUnidadeComponent {
  @Input({required:true}) videos!: string[];
  currentVideoIndex: number = 0;
  Is_loading_animation = false

  selectVideo(index: number) {
    this.startLoading();
    this.currentVideoIndex = index;
  }

  isLoading = false;

  startLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}

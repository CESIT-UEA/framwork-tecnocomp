import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
 @Input({required:true}) videos!: string[];
  currentVideoIndex: number = 0;

  nextVideo() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
  }

  prevVideo() {
    this.currentVideoIndex =
      (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length;
  }
}

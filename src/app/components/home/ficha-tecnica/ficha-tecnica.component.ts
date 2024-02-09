import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent {
  @ViewChild('container') container!: ElementRef;

  private isDown = false;
  private startX:number | null = null;
  private scrollLeft:number | null = null;

  onMouseDown(e:any) {
    this.isDown = true;
    this.startX = e.pageX - this.container.nativeElement.offsetLeft;
    this.scrollLeft = this.container.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(e:any) {
    if(!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.container.nativeElement.offsetLeft;
    const walk = (x - this.startX!) * 3; //scroll-fast
    this.container.nativeElement.scrollLeft = this.scrollLeft! - walk;
  }
}

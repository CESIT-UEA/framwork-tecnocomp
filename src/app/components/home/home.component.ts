import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(public appService:ServiceAppService,private router:Router){}

  navigation(){
    this.router.navigate(['/teorias-da-aprendizagem']);
  }

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

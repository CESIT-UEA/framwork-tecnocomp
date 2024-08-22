import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Componente depreciado, era responsavel por ser o slide do texto de apoio. É um componente reutilizavel
 */
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  @Input() caminhoSlide!: any;
  constructor(private sanitizer: DomSanitizer) {}
  teste:any;

  ngOnInit(): void {
    this.teste = `<div style="position: relative; width: 86%; height: 0; padding-top: 48.25%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); overflow: hidden;
 border-radius: 8px; will-change: transform; margin: 0 auto; margin-bottom: -2.5%;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 80%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src=`+ this.caminhoSlide + ` allow="fullscreen">
     </iframe>
   </div>
   `;
    this.teste = this.sanitizer.bypassSecurityTrustHtml(this.teste);
  }
}

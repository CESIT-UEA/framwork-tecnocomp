import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-aprendizagem-e-informatica',
  templateUrl: './aprendizagem-e-informatica.component.html',
  styleUrls: ['./aprendizagem-e-informatica.component.css']
})
export class AprendizagemEInformaticaComponent {
  arrayVideos:string[] = ['https://www.youtube.com/embed/c6kVJNkAeH4?si=78pwIHKZf_PDQuW_','https://www.youtube.com/embed/Vh8oOY0v9bg?si=_9t9bhiKjef2VgWK'];

}

import { Component, Input } from '@angular/core';

/**
 * Componente da seção do video que fica localizada na home
 */
@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css'],
})
export class VideoSectionComponent {
  /**
   * Sendo um componente reutilizavel, podemos inserir a url do video que queremos que seja mostrado
   */
  @Input() videoUrl!: any;
}

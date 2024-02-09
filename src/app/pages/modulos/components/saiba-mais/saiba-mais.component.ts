import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  @Input() links!: string[];
  @Output() linksClick = new EventEmitter<void>();
}

import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  template: `
  <ul>
    <li *ngFor="let nomeUnidades of unidades;let i = index"><a routerLink="{{unidadesLinks[i]}}">{{nomeUnidades}}</a></li>
  </ul>
`,
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {
  @Input() unidades: string[] = [];
  @Input() unidadesLinks: string[] = [];
}

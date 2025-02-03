import { Component, ElementRef, HostListener } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css'],
})
export class PerfilUserComponent{
  constructor(private eRef: ElementRef,    public ltiService: ServiceAppService) {}


  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (
      this.ltiService.perfilUser &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.ltiService.fechaMenuUser();
    }
  }
}

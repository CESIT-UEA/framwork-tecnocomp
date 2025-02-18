import { Component } from '@angular/core';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-botao-voltar-ava',
  templateUrl: './botao-voltar-ava.component.html',
  styleUrls: ['./botao-voltar-ava.component.css']
})
export class BotaoVoltarAvaComponent {
  constructor(public ltiService: ServiceAppService){}
}

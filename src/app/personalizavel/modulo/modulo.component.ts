import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuloService } from '../modulo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css'],
})
export class ModuloComponent implements OnInit {
  nomeModulo!: string;
  nomeTopico!: string;
  tokenData: any;
  topico: any;
  teste:any

  constructor(
    private route: ActivatedRoute,
    private moduloService: ModuloService,
    private router:Router,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    console.log("Passou pelo modulo")
  }

}

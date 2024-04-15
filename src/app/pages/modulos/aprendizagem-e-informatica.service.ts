import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AprendizagemEInformaticaService {
  notaTotal = 0
  constructor(){

  }

  topics = [
    { name: 'Behaviorismo', completed: false },
    { name: 'Construtivismo', completed: false },
    { name: 'Socioconstrutivismo', completed: false },
    { name: 'Construcionismo', completed: false }
  ];
  progress = 0;

}

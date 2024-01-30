import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AprendizagemEInformaticaService {

  constructor(private router: Router) { }

  topics = [
    { name: 'Behaviorismo', completed: false ,url:'/teorias-da-aprendizagem'},
    { name: 'Construtivismo', completed: false,url:'/teorias-da-aprendizagem/construtivismo' },
    { name: 'Socioconstrutivismo', completed: false,url:'/teorias-da-aprendizagem/socioconstrutivismo' },
    { name: 'Construcionismo', completed: false,url:'' }
  ];
  progress = 0;

  teste(){
    return false
  }

  updateProgress() {
    for (let indice = 0; indice < this.topics.length; indice++) {
      const elementoAtualizado = this.topics[indice];
      if (elementoAtualizado.url == this.router.url) {
        elementoAtualizado.completed = true
        const completedTopics = this.topics.filter(topic => topic.completed).length;
        this.progress = (completedTopics / this.topics.length) * 100;
      }
    }
  }
}

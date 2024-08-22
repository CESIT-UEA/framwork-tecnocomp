import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Service responsavel por lidar com o modulo de aprendizagem e informática
 */
@Injectable({
  providedIn: 'root',
})
export class AprendizagemEInformaticaService {
  /**
   * @constructor
   */
  constructor(private router: Router) {}

  /**
   * Variavel a qual guarda um vetor de objetos os quais tem os topicos do modulo e seu estado, se estão completos ou não
   */
  topics = [
    { name: 'Behaviorismo', completed: false, url: '/teorias-da-aprendizagem' },
    {
      name: 'Construtivismo',
      completed: false,
      url: '/teorias-da-aprendizagem/construtivismo',
    },
    {
      name: 'Socioconstrutivismo',
      completed: false,
      url: '/teorias-da-aprendizagem/socioconstrutivismo',
    },
    { name: 'Construcionismo', completed: false, url: '' },
  ];
  /**
   * Variavel responsavel por guardar o progresso no modulo
   */
  progress: number = 0;

  /**
   * @method
   * Metódo para atualizar o progresso
   */
  updateProgress() {
    for (let indice = 0; indice < this.topics.length; indice++) {
      const elementoAtualizado = this.topics[indice];
      if (elementoAtualizado.url == this.router.url) {
        elementoAtualizado.completed = true;
        const completedTopics = this.topics.filter(
          (topic) => topic.completed
        ).length;
        this.progress = (completedTopics / this.topics.length) * 100;
      }
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviorismo',
  templateUrl: './behaviorismo.component.html',
  styleUrls: ['./behaviorismo.component.css']
})
export class BehaviorismoComponent {
  arrayVideos:string[] = ['https://www.youtube.com/embed/c6kVJNkAeH4?si=78pwIHKZf_PDQuW_','https://www.youtube.com/embed/Vh8oOY0v9bg?si=_9t9bhiKjef2VgWK'];
}

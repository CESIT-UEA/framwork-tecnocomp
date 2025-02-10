import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ava',
  templateUrl: './dialog-ava.component.html',
  styleUrls: ['./dialog-ava.component.css']
})
export class DialogAvaComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {nome: string, url: string}){}
}

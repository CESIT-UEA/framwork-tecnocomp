import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ava } from 'src/app/interfaces/ava';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvaComponent } from '../dialog-ava/dialog-ava.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
    nomeAva: FormControl = new FormControl('')
    listaAvas: Ava[] = [];
    filterListaAvas: Ava[] = []

    constructor(public dialog: MatDialog, private snackBar: MatSnackBar){
        this.nomeAva.valueChanges.subscribe(()=>{
            this.filterAvas(this.nomeAva.value)
            console.log(this.filterListaAvas)
        })
    }

    ngOnInit(): void {
      let jsonAva: string = localStorage.getItem('avas')!
        if (jsonAva){
          let avas: Ava[] = JSON.parse(jsonAva)
          this.listaAvas = avas
        }
    }

    filterAvas(valor: string){
        valor = valor.toLowerCase()
        this.filterListaAvas = this.listaAvas.filter((ava)=> ava.nome.toLowerCase().includes(valor)) 
    }

    openDialog(id: number){
        const ava = JSON.parse(localStorage.getItem('avas')!)[id]
        const dialogRef = this.dialog.open(DialogAvaComponent, { data: ava})
        dialogRef.afterClosed().subscribe(resposta => {
            if (resposta){
                this.listaAvas.splice(id, 1)
                localStorage.clear()
                localStorage.setItem('avas', JSON.stringify(this.listaAvas))
                this.openSnackBar("AVA excluído com sucesso!")
            }
        })
    }

    openSnackBar(mensagem: string) {
      this.snackBar.open(mensagem, "OK", { duration: 3000 })
 }
  }

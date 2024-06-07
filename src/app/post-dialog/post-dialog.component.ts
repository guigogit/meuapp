import { Component, OnInit } from '@angular/core';

//import { FormsModule } from '@angular/forms';
//import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent implements OnInit {

  nome: string = '';
  email: string = '';
  titulo: string = '';
  subtitulo: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit() {
    // Inicializar dados do formulário se necessário
  }

}

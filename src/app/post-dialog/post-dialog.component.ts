import { Component, OnInit } from '@angular/core';
//import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatFormFieldModule,],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css'
})
export class PostDialogComponent implements OnInit {

  nome: string = '';
  email: string = '';
  titulo: string = '';
  subtitulo: string = '';
  mensagem: string = '';

  // ... outra lógica de componente (manipulação de envio de formulário, etc.)

  ngOnInit() {
    // Inicializar dados do formulário se necessário
  }
}

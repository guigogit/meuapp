import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule,MatFormFieldModule],
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


import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Post } from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostModule } from './post/post.module';  // Importe o módulo que contém PostDialogComponent e PostComponent
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    PostModule  // Importe o módulo que exporta PostDialogComponent e PostComponent
  ]
})
export class AppComponent {
  title = 'app';
  public posts: Post[] = [
    new Post("João", "Meu post", "Sub Meu", "joao@gmail.com", "Minha MSG"),
    new Post("Paulo", "Post do Paulo", "Sub Paulo", "paulo@gmail.com", "MSG do Paulo"),
    new Post("Maria", "Post da Maria", "Sub Maria", "Maria@gmail.com", "MSG da Maria"),
    new Post("Rodrigo", "Post do Rodrigo", "Sub Rodrigo", "Rodrigo@gmail.com", "MSG do Rodrigo"),
    new Post("Mirly", "Post da Mirly", "Sub Mirly", "Mirly@gmail.com", "MSG da Mirly"),
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '400px',
      data: { nome: '', email: '', titulo: '', subtitulo: '', mensagem: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
      // Processar o resultado aqui, se necessário
    });
  }
}

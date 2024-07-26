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
import { PostService } from './post.service';
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
  public posts: Post[];

  constructor(
    public dialog: MatDialog,
    public postService: PostService) {}

    ngOnInit() {
      this.posts = this.postService.posts;

    }

  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '445px', height: '445px',
      data: { nome: '', email: '', titulo: '', subtitulo: '', mensagem: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('O diálogo foi fechado');
      // Processar o resultado aqui, se necessário
      if (result) {
        this.postService.salvar(result.post, result.arquivo);
      }

    });
  }
  salvarPost() {
    const post = new Post('Nome', 'Título', 'Subtítulo', 'email@example.com', 'Mensagem', '', 0, 0);
    const file = new File(['conteúdo do arquivo'], 'arquivo.txt', { type: 'text/plain' });

    this.postService.salvar(post, file);
  }
}

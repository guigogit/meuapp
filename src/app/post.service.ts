import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  public posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.fetchPosts().subscribe(
      (posts: Post[]) => {
        for (let p of posts) {
          this.posts.push(
            new Post(p.nome, p.titulo, p.subtitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes)
          );
        }
      }
    );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api');
  }

  salvar(post: Post, file: File){
    const uploadData = new FormData();
    uploadData.append('nome', post.nome);
    uploadData.append('email', post.email);
    uploadData.append('titulo', post.titulo);
    uploadData.append('subtitulo', post.subtitulo);
    uploadData.append('mensagem', post.mensagem);
    uploadData.append('arquivo', file, file.name);

    this.http.post("/api", uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total!);
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event.type === HttpEventType.Response) {
        console.log('File uploaded successfully!', event.body);
      }
    });
  }
}

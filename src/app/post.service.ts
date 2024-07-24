import { HttpClient } from '@angular/common/http';
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
}

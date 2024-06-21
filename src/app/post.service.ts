import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {
  public posts: Post[] = [
    new Post("João", "Meu post", "Sub Meu", "joao@gmail.com", "Minha MSG"),
    new Post("Paulo", "Post do Paulo", "Sub Paulo", "paulo@gmail.com", "MSG do Paulo"),
    new Post("Maria", "Post da Maria", "Sub Maria", "Maria@gmail.com", "MSG da Maria"),
    new Post("Rodrigo", "Post do Rodrigo", "Sub Rodrigo", "Rodrigo@gmail.com", "MSG do Rodrigo"),
    new Post("Mirly", "Post da Mirly", "Sub Mirly", "Mirly@gmail.com", "MSG da Mirly"),
  ];

  constructor(private http: HttpClient) { }
}

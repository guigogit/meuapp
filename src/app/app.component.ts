import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { PostModule } from './post/post.module';
import { Post } from './post';

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
    MatCardHeader,
    CommonModule,
    DialogModule,
    PostModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'app';
  public posts: Post[] = [
    new Post("João", "Meu post", "Sub Meu", "joao@gmail.com", "Minha MSG"),
    new Post("Paulo", "Post do Paulo", "Sub Paulo", "paulo@gmail.com", "MSG do Paulo"),
    new Post("maria", "Post da Maria", "Sub Maria", "Maria@gmail.com", "MSG da Maria"),
    new Post("Paulo", "Post do Rodrigo", "Sub Rodrigo", "Rodrigo@gmail.com", "MSG do Rodrigo"),
    new Post("maria", "Post da Mirly", "Sub Mirly", "Mirly@gmail.com", "MSG da Mirly"),
  ];
}

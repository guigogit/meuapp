import { Component } from '@angular/core';
import { Post } from './post';
//import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public posts: Post[] = [
    new Post("João", "Meu post", "Sub Meu", "joao@gmail.com","Minha MSG"),
    new Post("Paulo", "Post do Paulo", "Sub Paulo", "paulo@gmail.com","MSG do Paulo"),
    new Post("maria", "Post da Maria", "Sub Maria", "Maria@gmail.com","MSG da Maria"),
    new Post("Paulo", "Post do Rodrigo", "Sub Rodrigo", "Rodrigo@gmail.com","MSG do Rodrigo"),
    new Post("maria", "Post da Mirly", "Sub Mirly", "Mirly@gmail.com","MSG da Mirly"),
  ];
}

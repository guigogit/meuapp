import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from '../post/post.component';



@NgModule({
  declarations: [PostComponent],
  imports: [MatCardModule], // Adicione Post na lista de declarações
  exports: [PostComponent] // Se precisar exportar o componente Post
})
export class PostModule { }


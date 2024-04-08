import { Component, Input, OnInit, } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle  } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card'; // Importe o módulo MatCardModule
import { Post } from '../post'; 



@Component({
  selector: 'app-post',
  //standalone: true,
  //imports: [MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardContent,MatCardActions,MatCardModule],
  templateUrl: '../post/post.component.html',
  styleUrl: '../post/post.component.css'
})
export class PostComponent  implements OnInit {
  @Input() post: Post;
  constructor() {}
  ngOnInit() {

  }

}


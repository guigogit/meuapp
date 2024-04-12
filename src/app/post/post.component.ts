import { Component, Input, OnInit, } from '@angular/core';


import { Post } from '../post';



@Component({
  selector: 'app-post',
  //standalone: true,
  //imports: [MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardContent,MatCardActions,MatCardModule],
  templateUrl: '../post/post.component.html',
  styleUrl: '../post/post.component.css'


})
export class PostComponent  implements OnInit {
  @Input() post: any; // Defina a entrada 'post' para receber dados
  constructor() {}
  ngOnInit() {

  }

}


import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
asset(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() post!: Post;
  postService: any;

  ngOnInit() {

  }

  like(){
    this.postService.like(this.post.id);
  }
}


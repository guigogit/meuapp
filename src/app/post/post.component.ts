import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
above: any;
asset(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() post!: Post;
  constructor(private postService: PostService) {}

  like() {
    if (this.post && this.post.id) {
      this.postService.like(this.post.id);
    }
  }
}

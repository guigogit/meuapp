import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ChangeDetectorRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.Emulated // ou .Emulated, dependendo da necessidade

})
export class PostComponent  {
above: any;
asset(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() post!: Post;
  constructor(private postService: PostService, private cdr: ChangeDetectorRef) {}


  like() {
    if (this.post && this.post.id) {
      this.post.likes = (this.post.likes || 0) + 1; // Incrementa likes localmente
      this.cdr.detectChanges();  // Força a detecção de mudanças

      //console.log('Likes: ', this.post.likes);
      this.postService.like(this.post.id);
    }
  }

}

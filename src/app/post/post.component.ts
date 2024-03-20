import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle  } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCard,MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardContent,MatCardActions],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}


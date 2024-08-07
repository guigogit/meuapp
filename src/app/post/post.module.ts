import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { PostComponent } from './post.component'; // Certifique-se de importar PostComponent
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PostDialogComponent,
    PostComponent // Declarar PostComponent
  ],
  imports: [
    CommonModule,
    MatIcon,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule, // Importar MatCardModule
    FormsModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    PostDialogComponent,
    PostComponent // Exportar PostComponent
  ]
})
export class PostModule { }
export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

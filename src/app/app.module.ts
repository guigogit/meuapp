import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component'; // Importe o AppComponent
import { PostModule } from './post/post.module';
import { PostService } from './post.service';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    PostModule  // Importe o módulo que exporta PostDialogComponent e PostComponent
  ],

  providers: [
    PostService
  ],
  bootstrap: []
})
export class AppModule { }

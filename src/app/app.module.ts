// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importe o AppComponent
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    // AppComponent já é declarado no AppModule, não é necessário declará-lo novamente aqui
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,


  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }

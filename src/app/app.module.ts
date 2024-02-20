// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importe o AppComponent


@NgModule({
  declarations: [
    // AppComponent já é declarado no AppModule, não é necessário declará-lo novamente aqui
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Pipe, PipeTransform } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';





import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,


  ],
  providers: [


    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]



})
export class AppModule { }

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

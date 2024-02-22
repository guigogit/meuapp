import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 // Importe o módulo AppModule
import { environment } from './environment';
import { AppComponent } from './app/app.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

if (environment.production) {
  enableProdMode();
}

// Use a função bootstrapApplication para inicializar o aplicativo
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(MatToolbarModule, BrowserModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MatSlideToggleModule, MatButtonModule, MatInputModule, MatSelectModule, MatIconModule, MatCardModule, MatDividerModule, MatDialogModule, MatChipsModule, MatBadgeModule),
        provideAnimationsAsync(),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));

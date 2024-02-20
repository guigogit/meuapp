import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importe o módulo AppModule
import { environment } from './environment';

if (environment.production) {
  enableProdMode();
}

// Use a função bootstrapApplication para inicializar o aplicativo
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

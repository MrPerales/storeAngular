import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// agregamos providerHTTOClient para poder usar HTTPCLient en cualquier parte del proyecto
// withComponentInputBinding() utilizamos para que los query params los obtenga como inputs
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};

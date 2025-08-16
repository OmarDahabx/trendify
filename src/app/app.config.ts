import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter , withHashLocation, withInMemoryScrolling} from '@angular/router';
import { provideHttpClient , withFetch } from '@angular/common/http';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes , withHashLocation() , withInMemoryScrolling({scrollPositionRestoration:'top'})),
    provideHttpClient(withFetch())
  ]
};

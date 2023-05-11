import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
// import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './app/core/http-interceptor/http-interceptor.service';
import { routes } from './app/pages/app-route';
import { provideRouter } from '@angular/router';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes),importProvidersFrom([BrowserAnimationsModule])],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule,HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    
  ],
 
});
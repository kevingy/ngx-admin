import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppInterceptor } from './http/http.interceptor';
import { Oauth2Interceptor } from './http/oauth2.interceptor';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

@NgModule({ declarations: [
        NotFoundComponent,
    ],
    exports: [], imports: [BrowserAnimationsModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: Oauth2Interceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class CoreModule { }

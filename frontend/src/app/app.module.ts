import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';

import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';

//http
import { 
  HttpClientModule, 
  HTTP_INTERCEPTORS }                 from '@angular/common/http';

// material module 
import { MaterialModule }             from './material/material.module';

//angular flex
import{ FlexLayoutModule }            from '@angular/flex-layout';

//ngrx
import { StoreModule }                from '@ngrx/store';
import { EffectsModule }              from '@ngrx/effects';
import { StoreDevtoolsModule }        from '@ngrx/store-devtools';

import { environment }                from '../environments/environment';
import { 
  LocationStrategy, 
  PathLocationStrategy }              from '@angular/common';

import { AppRoutingModule }           from './app-routing.module';
import { LayoutModule }               from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule 
}                                      from '@angular/material';
import { SharedModule }                from './shared/shared.module';

//services
import { CuentaTipoService ,
  
}                                     from './services';

import { AppComponent }               from './app.component';
import { MainNavComponent }           from './main-nav/main-nav.component';
import { FullComponent }              from './layouts/full/full.component';
import { AppHeaderComponent }         from './layouts/full/header/header.component';
import { AppSidebarComponent }        from './layouts/full/sidebar/sidebar.component';
import { SpinnerComponent }           from './shared/spinner.component';

@NgModule({
  declarations: [
    AppComponent,    
    MainNavComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    CuentaTipoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

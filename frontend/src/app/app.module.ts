import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

//http
import { HttpClientModule, HTTP_INTERCEPTORS }          from '@angular/common/http';

// material module 
import { MaterialModule }           from './material/material.module';

//angular flex
import{ FlexLayoutModule }          from '@angular/flex-layout';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

//services
import { CuentaService ,
  TipoCuentaService ,
  MonedaService, 
  EntidadService,
  CcostoService,
  TasasService, 
  GenericoService,
  SubmayorService,
  AreasService,
  SubareasService
}                                   from './services';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
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
    MonedaService,TipoCuentaService, 
    CuentaService, EntidadService, CcostoService,
    TasasService, GenericoService ,SubmayorService,
    AreasService, SubareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

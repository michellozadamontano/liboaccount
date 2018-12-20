import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { MaterialModule }             from '../material/material.module';
import { ClasificadoresRoutingModule} from './clasificadores-routing.module';

//http
import { HttpClientModule, HTTP_INTERCEPTORS }          from '@angular/common/http';

// Angular Forms
import { FormsModule }                                  from '@angular/forms';
import { ReactiveFormsModule }                          from '@angular/forms';

//angular flex
import{ FlexLayoutModule }          from '@angular/flex-layout';


//ngrx
import { StoreModule  }             from '@ngrx/store';
import { EffectsModule }            from '@ngrx/effects';
import { reducers, effects }        from '../clasificadores/store';
import { NgrxFormsModule }          from 'ngrx-forms';




import { CuentaTipoListComponent }  from './components/cuenta_tipo/cuenta-tipo-list/cuenta-tipo-list.component';
import { CuentaTipoFormComponent }  from './components/cuenta_tipo/cuenta-tipo-form/cuenta-tipo-form.component';
import { HomeComponent }            from './containers/home/home.component';
import { ActividadIndexComponent }  from './containers/actividades/actividad-index/actividad-index.component';
import { ActividadNewComponent }    from './containers/actividades/actividad-new/actividad-new.component';
import { ActividadEditComponent }   from './containers/actividades/actividad-edit/actividad-edit.component';
import { ActividadListComponent }   from './components/actividades/actividad-list/actividad-list.component';
import { ActividadFormComponent }   from './components/actividades/actividad-form/actividad-form.component';
import { TcpIndexComponent }        from './containers/tcp/tcp-index/tcp-index.component';
import { TcpNewComponent }          from './containers/tcp/tcp-new/tcp-new.component';
import { TcpEditComponent }         from './containers/tcp/tcp-edit/tcp-edit.component';
import { TcpFormComponent }         from './components/tcp/tcp-form/tcp-form.component';
import { TcpShowComponent }         from './components/tcp/tcp-show/tcp-show.component';
import { CuentaIndexComponent }     from './containers/plan_cuentas/cuenta-index/cuenta-index.component';
import { MayorNewComponent }        from './containers/plan_cuentas/mayor-new/mayor-new.component';
import { MayorEditComponent }       from './containers/plan_cuentas/mayor-edit/mayor-edit.component';
import { MayorFormComponent }       from './components/plan_cuentas/mayor-form/mayor-form.component';
import { MayorListComponent }       from './components/plan_cuentas/mayor-list/mayor-list.component';
import { CuentaTipoIndexComponent } from './containers/plan_cuentas/cuenta-tipo-index/cuenta-tipo-index.component';
import { CuentaTipoNewComponent }   from './containers/plan_cuentas/cuenta-tipo-new/cuenta-tipo-new.component';
import { CuentaTipoEditComponent }  from './containers/plan_cuentas/cuenta-tipo-edit/cuenta-tipo-edit.component';




@NgModule({
  imports: [
    CommonModule,
    ClasificadoresRoutingModule,    
    MaterialModule,   
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    NgrxFormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('clasificadores', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    HomeComponent,
    CuentaTipoIndexComponent,
    CuentaTipoNewComponent,
    CuentaTipoEditComponent,
    CuentaTipoListComponent,
    CuentaTipoFormComponent,
    ActividadIndexComponent,
    ActividadNewComponent,
    ActividadEditComponent,
    ActividadListComponent,
    ActividadFormComponent,
    TcpIndexComponent,
    TcpNewComponent,
    TcpEditComponent,
    TcpFormComponent,
    TcpShowComponent,
    CuentaIndexComponent,
    MayorNewComponent,
    MayorEditComponent,
    MayorFormComponent,
    MayorListComponent
  ],
  providers: [],
  entryComponents:[]
})
export class ClasificadoresModule { }

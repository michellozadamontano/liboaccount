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


//services
import { CuentaService ,
  TipoCuentaService ,
  MonedaService, 
  EntidadService,
  CcostoService,
  TasasService }                    from './services';

import { CuentasComponent }         from './containers/cuentas/cuentas.component';
import { HomeComponent }            from './containers/home/home.component';
import { FormCuentaComponent }      from './dialogs/form-cuenta/form-cuenta.component';
import { EntidadComponent }         from './containers/entidad/entidad.component';
import { TasasComponent }           from './containers/tasas/tasas.component';
import { PrintCuentaComponent }     from './dialogs/print-cuenta/print-cuenta.component';
import { TasaCuentaComponent }      from './dialogs/tasa-cuenta/tasa-cuenta.component';
import { FormTasaComponent } from './dialogs/form-tasa/form-tasa.component';



@NgModule({
  imports: [
    CommonModule,
    ClasificadoresRoutingModule,    
    MaterialModule,   
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature('clasificadores', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [CuentasComponent, HomeComponent, FormCuentaComponent, 
    EntidadComponent, TasasComponent, PrintCuentaComponent, TasaCuentaComponent, FormTasaComponent
  ],
  providers: [MonedaService,TipoCuentaService, 
    CuentaService, EntidadService, CcostoService,TasasService],
  entryComponents:[FormCuentaComponent, PrintCuentaComponent, TasaCuentaComponent]
})
export class ClasificadoresModule { }

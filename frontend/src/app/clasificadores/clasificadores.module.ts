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


//services
import { CuentaService ,
  TipoCuentaService ,
  MonedaService, 
  EntidadService,
  CcostoService,
  TasasService, 
  GenericoService}                    from './services';

import { CuentasComponent }         from './containers/cuentas/cuentas.component';
import { HomeComponent }            from './containers/home/home.component';
import { FormCuentaComponent }      from './dialogs/form-cuenta/form-cuenta.component';
import { EntidadComponent }         from './containers/entidad/entidad.component';
import { TasasComponent }           from './containers/tasas/tasas.component';
import { PrintCuentaComponent }     from './dialogs/print-cuenta/print-cuenta.component';
import { TasaCuentaComponent }      from './dialogs/tasa-cuenta/tasa-cuenta.component';
import { FormTasaComponent }        from './dialogs/form-tasa/form-tasa.component';
import { CcostoComponent }          from './containers/ccostos/ccosto/ccosto.component';
import { CostoListComponent }       from './components/ccosto/costo-list/costo-list.component';
import { CcostoNewComponent }       from './containers/ccostos/ccosto-new/ccosto-new.component';
import { CcostoFormComponent }      from './components/ccosto/ccosto-form/ccosto-form.component';
import { CcostoEditComponent }      from './containers/ccostos/ccosto-edit/ccosto-edit.component';
import { GenericoIndexComponent }   from './containers/genericos/generico-index/generico-index.component';
import { GenericoEditComponent }    from './containers/genericos/generico-edit/generico-edit.component';
import { GenericoNewComponent }     from './containers/genericos/generico-new/generico-new.component';
import { GenericoFormComponent }    from './components/genericos/generico-form/generico-form.component';
import { GenericoListComponent }    from './components/genericos/generico-list/generico-list.component';




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
  declarations: [CuentasComponent, HomeComponent, FormCuentaComponent, 
    EntidadComponent, TasasComponent, PrintCuentaComponent, 
    TasaCuentaComponent, FormTasaComponent, CcostoComponent, 
    CostoListComponent, CcostoNewComponent, CcostoFormComponent,
    CcostoEditComponent,
    GenericoIndexComponent,
    GenericoEditComponent,
    GenericoNewComponent,
    GenericoFormComponent,
    GenericoListComponent
  ],
  providers: [MonedaService,TipoCuentaService, 
    CuentaService, EntidadService, CcostoService,TasasService, GenericoService],
  entryComponents:[FormCuentaComponent, PrintCuentaComponent, TasaCuentaComponent, FormTasaComponent]
})
export class ClasificadoresModule { }

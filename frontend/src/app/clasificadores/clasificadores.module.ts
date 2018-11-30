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
  GenericoService,
  SubmayorService,
  AreasService,
  SubareasService
}                                   from './services';

import { CuentasComponent }         from './containers/cuenta-manager/cuentas/cuentas.component';
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
import { CuentaPrintComponent }     from './components/cuentas/cuenta-print/cuenta-print.component';
import { CuentaFormComponent }      from './components/cuentas/cuenta-form/cuenta-form.component';
import { CuentaNewComponent }       from './containers/cuenta-manager/cuenta-new/cuenta-new.component';
import { CuentaEditComponent }      from './containers/cuenta-manager/cuenta-edit/cuenta-edit.component';
import { SubmayorIndexComponent }   from './containers/submayor/submayor-index/submayor-index.component';
import { SubmayorListComponent }    from './components/submayor/submayor-list/submayor-list.component';
import { SubmayorFormComponent }    from './components/submayor/submayor-form/submayor-form.component';
import { DialogSubmayorEditComponent } from './dialogs/dialog-submayor-edit/dialog-submayor-edit.component';
import { AreaIndexComponent }       from './containers/areas/area-index/area-index.component';
import { AreaNewComponent }         from './containers/areas/area-new/area-new.component';
import { AreaEditComponent }        from './containers/areas/area-edit/area-edit.component';
import { SubareaIndexComponent }    from './containers/subareas/subarea-index/subarea-index.component';
import { AreaFormComponent }        from './components/areas/area-form/area-form.component';
import { AreaListComponent }        from './components/areas/area-list/area-list.component';
import { SubareaFormComponent }     from './components/subarea/subarea-form/subarea-form.component';
import { SubareaListComponent }     from './components/subarea/subarea-list/subarea-list.component';




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
    GenericoListComponent,
    CuentaPrintComponent,
    CuentaFormComponent,
    CuentaNewComponent,
    CuentaEditComponent,
    SubmayorIndexComponent,
    SubmayorListComponent,
    SubmayorFormComponent,
    DialogSubmayorEditComponent,
    AreaIndexComponent,
    AreaNewComponent,
    AreaEditComponent,
    SubareaIndexComponent,
    AreaFormComponent,
    AreaListComponent,
    SubareaFormComponent,
    SubareaListComponent
  ],
  providers: [MonedaService,TipoCuentaService, 
    CuentaService, EntidadService, CcostoService,
    TasasService, GenericoService ,SubmayorService,
    AreasService, SubareasService],
  entryComponents:[FormCuentaComponent, 
    PrintCuentaComponent, 
    TasaCuentaComponent, FormTasaComponent,
    DialogSubmayorEditComponent]
})
export class ClasificadoresModule { }

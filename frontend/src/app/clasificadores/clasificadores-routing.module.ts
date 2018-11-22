import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './containers/home/home.component';
import { CuentasComponent }     from './containers/cuentas/cuentas.component';
import { EntidadComponent }     from './containers/entidad/entidad.component';
import { TasasComponent }       from './containers/tasas/tasas.component';
import { CcostoComponent }      from './containers/ccostos/ccosto/ccosto.component';
import { CcostoNewComponent }   from './containers/ccostos/ccosto-new/ccosto-new.component';
import { CcostoEditComponent }  from './containers/ccostos/ccosto-edit/ccosto-edit.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo:'cuentas', pathMatch: 'full' },
      { path: 'cuentas', component: CuentasComponent},
      { path: 'entidad', component: EntidadComponent},
      { path: 'tasas', component: TasasComponent},
      { path: 'ccosto', component: CcostoComponent},
      { path: 'ccosto_new', component: CcostoNewComponent},
      { path: 'ccosto_edit/:id', component: CcostoEditComponent}
    ]
  }
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadoresRoutingModule { }

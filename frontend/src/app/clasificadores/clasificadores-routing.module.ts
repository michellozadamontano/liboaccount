import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './containers/home/home.component';
import { CuentasComponent }     from './containers/cuenta-manager/cuentas/cuentas.component';
import { EntidadComponent }     from './containers/entidad/entidad.component';
import { TasasComponent }       from './containers/tasas/tasas.component';
import { CcostoComponent }      from './containers/ccostos/ccosto/ccosto.component';
import { CcostoNewComponent }   from './containers/ccostos/ccosto-new/ccosto-new.component';
import { CcostoEditComponent }  from './containers/ccostos/ccosto-edit/ccosto-edit.component';
import { GenericoIndexComponent } from './containers/genericos/generico-index/generico-index.component';
import { GenericoNewComponent }   from './containers/genericos/generico-new/generico-new.component';
import { GenericoEditComponent }  from './containers/genericos/generico-edit/generico-edit.component';
import { CuentaNewComponent }     from './containers/cuenta-manager/cuenta-new/cuenta-new.component';
import { CuentaEditComponent }    from './containers/cuenta-manager/cuenta-edit/cuenta-edit.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo:'cuentas', pathMatch: 'full' },
      { path: 'cuentas',          component: CuentasComponent},
      { path: 'cuenta-new',       component: CuentaNewComponent},
      { path: 'cuenta-edit/:id',  component: CuentaEditComponent},
      { path: 'entidad',          component: EntidadComponent},
      { path: 'tasas',            component: TasasComponent},
      { path: 'ccosto',           component: CcostoComponent},
      { path: 'ccosto_new',       component: CcostoNewComponent},
      { path: 'ccosto_edit/:id',  component: CcostoEditComponent},
      { path: 'generico',         component: GenericoIndexComponent},
      { path: 'generico_new',     component: GenericoNewComponent},
      { path: 'generico_edit/:id',component: GenericoEditComponent},
    ]
  }
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadoresRoutingModule { }

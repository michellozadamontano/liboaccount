import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './containers/home/home.component';
import { CuentasComponent }     from './containers/cuentas/cuentas.component';
import { EntidadComponent }     from './containers/entidad/entidad.component';
import { TasasComponent }       from './containers/tasas/tasas.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo:'cuentas', pathMatch: 'full' },
      { path: 'cuentas', component: CuentasComponent},
      { path: 'entidad', component: EntidadComponent},
      { path: 'tasas', component: TasasComponent}
    ]
  }
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadoresRoutingModule { }

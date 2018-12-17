import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { HomeComponent }            from './containers/home/home.component';
import { CuentaTipoIndexComponent } from './containers/cuenta_tipo/cuenta-tipo-index/cuenta-tipo-index.component';
import { CuentaTipoNewComponent }   from './containers/cuenta_tipo/cuenta-tipo-new/cuenta-tipo-new.component';
import { CuentaTipoEditComponent }  from './containers/cuenta_tipo/cuenta-tipo-edit/cuenta-tipo-edit.component';
import { ActividadIndexComponent } from './containers/actividades/actividad-index/actividad-index.component';
import { ActividadNewComponent } from './containers/actividades/actividad-new/actividad-new.component';
import { ActividadEditComponent } from './containers/actividades/actividad-edit/actividad-edit.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo:'cuenta_tipo', pathMatch: 'full' },     
      { path: 'cuenta_tipo',            component: CuentaTipoIndexComponent},
      { path: 'cuenta_tipo_new',        component: CuentaTipoNewComponent},
      { path: 'cuenta_tipo_edit/:id',   component: CuentaTipoEditComponent},
      { path: 'actividad',              component: ActividadIndexComponent},
      { path: 'actividad_new',          component: ActividadNewComponent},
      { path: 'actividad_edit/:id',     component: ActividadEditComponent},
    ]
  }
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadoresRoutingModule { }

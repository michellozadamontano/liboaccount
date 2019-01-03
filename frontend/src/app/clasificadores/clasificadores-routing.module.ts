import { NgModule }                       from '@angular/core';
import { Routes, RouterModule }           from '@angular/router';

import { HomeComponent }                  from './containers/home/home.component';
import { ActividadIndexComponent }        from './containers/actividades/actividad-index/actividad-index.component';
import { ActividadNewComponent }          from './containers/actividades/actividad-new/actividad-new.component';
import { ActividadEditComponent }         from './containers/actividades/actividad-edit/actividad-edit.component';
import { TcpIndexComponent }              from './containers/tcp/tcp-index/tcp-index.component';
import { TcpNewComponent }                from './containers/tcp/tcp-new/tcp-new.component';
import { TcpEditComponent }               from './containers/tcp/tcp-edit/tcp-edit.component';
import { CuentaIndexComponent }           from './containers/plan_cuentas/cuenta-index/cuenta-index.component';
import { MayorNewComponent }              from './containers/plan_cuentas/mayor-new/mayor-new.component';
import { MayorEditComponent }             from './containers/plan_cuentas/mayor-edit/mayor-edit.component';
import { CuentaTipoIndexComponent }       from './containers/plan_cuentas/cuenta-tipo-index/cuenta-tipo-index.component';
import { CuentaTipoNewComponent }         from './containers/plan_cuentas/cuenta-tipo-new/cuenta-tipo-new.component';
import { CuentaTipoEditComponent }        from './containers/plan_cuentas/cuenta-tipo-edit/cuenta-tipo-edit.component';

import { CentroCostoIndexComponent }      from './containers/centro_costo/centro-costo-index/centro-costo-index.component';
import { CentroCostoNewComponent }        from './containers/centro_costo/centro-costo-new/centro-costo-new.component';
import { CentroCostoEditComponent }       from './containers/centro_costo/centro-costo-edit/centro-costo-edit.component';
import { MayorIndexComponent }            from './containers/plan_cuentas/mayor-index/mayor-index.component';
import { PlanIndexComponent }             from './containers/plan_cuentas/plan-index/plan-index.component';
import { PlanNewComponent }               from './containers/plan_cuentas/plan-new/plan-new.component';
import { PlanEditComponent }              from './containers/plan_cuentas/plan-edit/plan-edit.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo:'cuenta_tipo', pathMatch: 'full' },       
      { path: 'actividad',              component: ActividadIndexComponent},
      { path: 'actividad_new',          component: ActividadNewComponent},
      { path: 'actividad_edit/:id',     component: ActividadEditComponent},
      { path: 'tcp',                    component: TcpIndexComponent},
      { path: 'tcp_new',                component: TcpNewComponent},
      { path: 'tcp_edit/:id',           component: TcpEditComponent},
      { path: 'cuentas',                component: CuentaIndexComponent},
      { path: 'mayor',                  component: MayorIndexComponent},
      { path: 'mayor_new',              component: MayorNewComponent},
      { path: 'mayor_edit/:id',         component: MayorEditComponent},
      { path: 'cuenta_tipo',            component: CuentaTipoIndexComponent},
      { path: 'cuenta_tipo_new',        component: CuentaTipoNewComponent},
      { path: 'cuenta_tipo_edit/:id',   component: CuentaTipoEditComponent},
      { path: 'plan',                   component: PlanIndexComponent},
      { path: 'plan_new',               component: PlanNewComponent},
      { path: 'plan_edit/:id',          component: PlanEditComponent},
      { path: 'centro_costo',           component: CentroCostoIndexComponent},
      { path: 'centro_costo_new',       component: CentroCostoNewComponent},
      { path: 'centro_costo_edit/:id',  component: CentroCostoEditComponent},
    ]
  }
  
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadoresRoutingModule { }

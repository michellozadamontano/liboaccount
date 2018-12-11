import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent }        from './layouts/full/full.component';



const routes: Routes = [
  {   

    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/clasificadores',
        pathMatch: 'full'
      },
      {
        path: 'clasificadores',
        loadChildren: './clasificadores/clasificadores.module#ClasificadoresModule'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

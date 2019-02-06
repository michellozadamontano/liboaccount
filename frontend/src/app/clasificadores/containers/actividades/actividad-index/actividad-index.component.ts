import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                               from '@angular/core';


// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { Router }                 from '@angular/router';
import { Actividades }            from 'src/app/clasificadores/models/actividades.interface';
import { ActividadesService }     from 'src/app/services';

@Component({
  selector: 'app-actividad-index',
  templateUrl: './actividad-index.component.html',
  styleUrls: ['./actividad-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActividadIndexComponent implements OnInit {

  actividadList$ : Observable<Actividades[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private actividadService: ActividadesService,
    private router: Router
  ) { }

  ngOnInit() {
   // this.store.dispatch(new fromStore.LoadActividades());
   // this.actividadList$ = this.store.select(fromStore.getActividadList);  
   this.actividadList$ = this.actividadService.getActividades();  
  }
  add()
  {
    this.router.navigate(['clasificadores/actividad_new']);
  }
  edit(id:number){
        
    this.router.navigate(['clasificadores/actividad_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteActividad(id));
    }
    
  }

}

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
import { Actividades } from 'src/app/clasificadores/models/actividades.interface';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadActividades());
    this.actividadList$ = this.store.select(fromStore.getActividadList);
    this.actividadList$.subscribe(resp => {
      console.log(resp);
      
    })
  }

}

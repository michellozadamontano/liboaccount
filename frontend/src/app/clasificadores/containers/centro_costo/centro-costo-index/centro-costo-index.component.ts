import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { Router }                 from '@angular/router';
import { CentroCosto } from 'src/app/clasificadores/models/centro_costo.interface';

@Component({
  selector: 'app-centro-costo-index',
  templateUrl: './centro-costo-index.component.html',
  styleUrls: ['./centro-costo-index.component.scss']
})
export class CentroCostoIndexComponent implements OnInit {

  centro_costo_list$ : Observable<CentroCosto[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCentroCosto());
    this.centro_costo_list$ = this.store.select(fromStore.getCentroCostoList);
  }
  add()
  {
    this.router.navigate(['clasificadores/centro_costo_new']);
  }
  edit(id:number)
  {
    this.router.navigate(['clasificadores/centro_costo_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCentroCosto(id));
    }
    
  }

}

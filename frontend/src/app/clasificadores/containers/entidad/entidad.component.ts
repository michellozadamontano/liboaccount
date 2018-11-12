import { Component, OnInit } from '@angular/core';

import { Store }                    from '@ngrx/store';
import { Observable }               from 'rxjs';
import * as fromStore               from '../../store';
import { Provincia }                from '../../models/provincia.interface';
import { Entidad } from '../../models/entidad.interface';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {
  provinces$ : Observable<Provincia[]>;
  entidades$ : Observable<Entidad[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>
  ) { }

  ngOnInit() {
    this.provinces$ = this.store.select(fromStore.getProvinces);
    this.entidades$ = this.store.select(fromStore.getEntidad);
    this.store.dispatch(new fromStore.LoadProvince());
    this.store.dispatch(new fromStore.LoadEntidad());
     

  }

}

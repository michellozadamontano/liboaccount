import { Component, OnInit }            from '@angular/core';

// ngrx
import { Store }                        from '@ngrx/store';
import { Observable }                   from 'rxjs';
import * as fromStore                   from '../../../store';

import { Router, ActivatedRoute }       from '@angular/router';
import { Provincia }                    from 'src/app/clasificadores/models/provincia.interface';
import { Entidad }                      from 'src/app/clasificadores/models/entidad.interface';

@Component({
  selector: 'app-entidad-edit',
  templateUrl: './entidad-edit.component.html',
  styleUrls: ['./entidad-edit.component.scss']
})
export class EntidadEditComponent implements OnInit {

  provinces$  : Observable<Provincia[]>;
  entidad$    : Observable<Entidad>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private ar : ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadProvince());
    this.store.dispatch(new fromStore.LoadEntidad());
    this.provinces$ = this.store.select(fromStore.getProvinces);
    this.entidad$ = this.store.select(fromStore.getEntidad);
  }
  save(entidad: Entidad)
  {  
    this.store.dispatch(new fromStore.UpdateEntidad(entidad));
    this.router.navigate(['clasificadores/entidad']);
  }

}

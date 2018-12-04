import { Component, OnInit }        from '@angular/core';

import { Store }                    from '@ngrx/store';
import { Observable }               from 'rxjs';
import * as fromStore               from '../../../store';
import { Provincia }                from 'src/app/clasificadores/models/provincia.interface';
import { Entidad }                  from 'src/app/clasificadores/models/entidad.interface';
import { Router }                   from '@angular/router';


@Component({
  selector: 'app-entidad-new',
  templateUrl: './entidad-new.component.html',
  styleUrls: ['./entidad-new.component.scss']
})
export class EntidadNewComponent implements OnInit {

  provinces$ : Observable<Provincia[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadProvince());
    this.provinces$ = this.store.select(fromStore.getProvinces);    
  }
  save(entidad: Entidad)
  {  
    this.store.dispatch(new fromStore.CreateEntidad(entidad));
    this.router.navigate(['clasificadores/entidad']);
  }

}

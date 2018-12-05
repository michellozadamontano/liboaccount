import { Component, OnInit }        from '@angular/core';

import { Store }                    from '@ngrx/store';
import { Observable }               from 'rxjs';
import * as fromStore               from '../../../store';

import { Provincia }                from '../../../models/provincia.interface';
import { Entidad }                  from '../../../models/entidad.interface';
import { Router }                   from '@angular/router';
import { PlantillaComp } from 'src/app/clasificadores/models/plantilla_comp.interface';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {
  provinces$  : Observable<Provincia[]>;
  entidad$    : Observable<Entidad>;
  plantillas$ : Observable<PlantillaComp[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadProvince());
    this.store.dispatch(new fromStore.LoadEntidad());
    this.store.dispatch(new fromStore.LoadPlantilla());
    this.provinces$ = this.store.select(fromStore.getProvinces);
    this.entidad$ = this.store.select(fromStore.getEntidad);  
    this.plantillas$ = this.store.select(fromStore.getPlantillas);  

  }
  Add()
  {
    this.router.navigate(['clasificadores/entidad_new']);
  }
  Update(entidad: Entidad)
  {
    this.router.navigate(['clasificadores/entidad_edit/',entidad.id]);
  }

}

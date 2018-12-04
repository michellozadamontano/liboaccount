import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// ngrx
import { Store }                        from '@ngrx/store';
import { Observable }                   from 'rxjs';
import * as fromStore                   from '../../../store';
import { Router, ActivatedRoute }       from '@angular/router';
import { CcostoList }                   from 'src/app/clasificadores/models/ccosto_list.interface';
import { Area }                         from 'src/app/clasificadores/models/area.interface';


@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaEditComponent implements OnInit {

  ccostos$ : Observable<CcostoList[]>;
  area_id  : number;
  area$    : Observable<Area>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private ar : ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCosto());
    this.ccostos$ = this.store.select(fromStore.getCostos);
    this.area_id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadAreaById(this.area_id));
    this.area$ = this.store.select(fromStore.getArea);

  }
  submit(area:Area){
    console.log(area);
    
    this.store.dispatch(new fromStore.UpdateArea(area));
    this.router.navigate(['clasificadores/areas']);
  }

}

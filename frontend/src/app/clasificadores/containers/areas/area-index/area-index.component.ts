import { Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  ViewChild
}                                 from '@angular/core';

import { Router }                 from '@angular/router';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }             from 'rxjs';
import * as fromStore             from '../../../store';
import { AreaList }               from 'src/app/clasificadores/models/area_list.interface';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-area-index',
  templateUrl: './area-index.component.html',
  styleUrls: ['./area-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaIndexComponent implements OnInit {

  areaList$ : Observable<AreaList[]>
  public displayedColumns = ['Nombre','Responsable','Centro Costo','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;
  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {    
    this.store.dispatch(new fromStore.LoadArea());
    this.areaList$ = this.store.select(fromStore.getAreas);    
    this.areaList$.subscribe(areas => {
      this.dataSource = new MatTableDataSource(areas);
      this.resultsLength = areas.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  Add()
  {
    this.router.navigate(['clasificadores/areas_new']);
  }
  Update(id:number)
  {    
    this.router.navigate(['clasificadores/areas_edit/',id]);
  }
  Delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteArea(id));
    }
    
  }

}

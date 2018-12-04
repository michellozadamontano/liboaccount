import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  ViewChild
 }                                from '@angular/core';
 import { Router }                from '@angular/router';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }             from 'rxjs';
import * as fromStore             from '../../../store';
import { 
  MatTableDataSource, 
  MatPaginator, 
  MatSort, 
  MatDialog
}                                 from '@angular/material';
import { SubArea } from 'src/app/clasificadores/models/subarea.interface';
import { AreaList } from 'src/app/clasificadores/models/area_list.interface';
import { DialogSubareaEditComponent } from 'src/app/clasificadores/dialogs/dialog-subarea-edit/dialog-subarea-edit.component';

@Component({
  selector: 'app-subarea-index',
  templateUrl: './subarea-index.component.html',
  styleUrls: ['./subarea-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubareaIndexComponent implements OnInit {

  subareas$ : Observable<SubArea[]>
  areas$    : Observable<AreaList[]>

  public displayedColumns = ['Nombre','Responsable','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;
  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() { 
    this.store.dispatch(new fromStore.LoadArea);
    this.areas$ = this.store.select(fromStore.getAreas);
    this.subareas$ = this.store.select(fromStore.getSubAreas);
  }
  submit(subarea: SubArea)
  {
    console.log(subarea);      
    this.store.dispatch(new fromStore.CreateSubArea(subarea));
   // this.loadSubArea(subarea.area_id);
  }

  loadSubArea(area_id: number)
  {
      this.store.dispatch(new fromStore.LoadSubArea(area_id));
      this.subareas$ = this.store.select(fromStore.getSubAreas);
      this.subareas$.subscribe(subareas => {
        this.dataSource = new MatTableDataSource(subareas);
       // this.resultsLength = subareas.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  Update(subarea: SubArea)
  {    
    const dialogRef = this.dialog.open(DialogSubareaEditComponent, {
      width: '50%',
      data:  subarea
    });
    
      dialogRef.afterClosed().subscribe(subarea => {
       this.store.dispatch(new fromStore.UpdateSubArea(subarea));       
      });
  }
  Delete(subarea: SubArea)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteSubArea(subarea));
    }
    
  }

}

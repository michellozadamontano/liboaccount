import { 
  Component, OnInit, 
  ChangeDetectionStrategy, 
  Input, Output, 
  EventEmitter, 
  ViewChild,
  AfterViewInit
}                                           from '@angular/core';
import { AreaList }                         from 'src/app/clasificadores/models/area_list.interface';

import { MatTableDataSource, MatDialog } 		from '@angular/material';
import { MatPaginator, MatSort }            from '@angular/material';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaListComponent implements OnInit, AfterViewInit {

  @Input() areas    : AreaList[];
  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Nombre','Responsable','Centro Costo','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>(this.areas);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() {     
    
  }

  ngOnInit() {
    console.log(this.areas);    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource = new MatTableDataSource(this.areas);
    this.resultsLength = this.areas.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Update(id:number)
  {
    this.edit.emit(id);
  }
  Delete(id:number)
  {
    this.delete.emit(id);
  }

}

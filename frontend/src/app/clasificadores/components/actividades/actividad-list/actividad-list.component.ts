import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges
}                                           from '@angular/core';

import { MatTableDataSource, MatDialog } 		from '@angular/material';
import { MatPaginator, MatSort }            from '@angular/material';
import { Actividades }                      from 'src/app/clasificadores/models/actividades.interface';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActividadListComponent implements OnInit, OnChanges {
  @Input() actividadList : Actividades[];

  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns           = ['Codigo','Nombre','GastoPermitido','Actions'];
  resultsLength                     = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.dataSource           = new MatTableDataSource(this.actividadList);
    this.resultsLength        = this.actividadList.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }
  update(id:number)
  {
    this.edit.emit(id);
  }
  remove(id:number)
  {
    this.delete.emit(id);
  }

}

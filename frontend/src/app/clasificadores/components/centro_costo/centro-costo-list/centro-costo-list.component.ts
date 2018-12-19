import { Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges } from '@angular/core';

import { MatTableDataSource, MatDialog } 		from '@angular/material';
import { MatPaginator, MatSort }            from '@angular/material';
import { CentroCosto }                       from 'src/app/clasificadores/models/centro_costo.interface';


@Component({
  selector: 'app-centro-costo-list',
  templateUrl: './centro-costo-list.component.html',
  styleUrls: ['./centro-costo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentroCostoListComponent implements OnInit, OnChanges {
  @Input() centroCostoList    : CentroCosto[];
  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Codigo','Nombre','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.centroCostoList);
    this.resultsLength = this.centroCostoList.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

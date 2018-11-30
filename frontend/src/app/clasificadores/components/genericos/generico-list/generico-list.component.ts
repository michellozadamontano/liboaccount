import { ChangeDetectionStrategy,Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GenericoList }                     from 'src/app/clasificadores/models/generico_list.interface';
import {MatTableDataSource, MatDialog} 		  from '@angular/material';
import {MatPaginator, MatSort}              from '@angular/material';


@Component({
  selector: 'app-generico-list',
  templateUrl: './generico-list.component.html',
  styleUrls: ['./generico-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericoListComponent implements OnInit {
  @Input() genericoList : GenericoList[];
  @Output() edit        = new EventEmitter<number>();
  @Output() delete      = new EventEmitter<number>();

  public displayedColumns = ['Codigo','Descripcion','Tasa','Actions'];
  resultsLength = 0;  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor() { }

  ngOnInit() {
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

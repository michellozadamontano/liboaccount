import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Submayor } from 'src/app/clasificadores/models/submayor.interface';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-submayor-list',
  templateUrl: './submayor-list.component.html',
  styleUrls: ['./submayor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmayorListComponent implements OnInit {

  @Input() dataSource: Submayor[];
  @Output() edit        = new EventEmitter<Submayor>();
  @Output() delete      = new EventEmitter<number>();

  public displayedColumns = ['Submayor','Descripcion','Actions'];
  resultsLength = 0;  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;
  

  constructor() { }

  ngOnInit() {
  }
  update(sumayor:Submayor)
  {
    this.edit.emit(sumayor);
  }
  remove(id:number)
  {
    this.delete.emit(id);
  }

}

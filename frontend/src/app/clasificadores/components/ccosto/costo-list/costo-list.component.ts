import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Input, Output, ViewChild } from '@angular/core';
import { CcostoList } from '../../../models/ccosto_list.interface';

import {MatTableDataSource, MatDialog} 		  from '@angular/material';
import {MatPaginator, MatSort}              from '@angular/material';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';
import { Ccosto } from 'src/app/clasificadores/models/ccosto.interface';


@Component({
  selector: 'app-costo-list',
  templateUrl: './costo-list.component.html',
  styleUrls: ['./costo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostoListComponent implements OnInit {
  @Input() ccosto   : CcostoList[];  
  @Output() edit    =  new EventEmitter<number>();
  @Output() delete  =  new EventEmitter<number>();

  public displayedColumns = ['Codigo','Descripcion','Tipo Ctrol.Inv','Actions'];
  resultsLength = 0;
  public dataSource 		            = new MatTableDataSource<CcostoList>(this.ccosto);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;
 
  constructor() { }

  ngOnInit() {    
   // this.dataSource = new MatTableDataSource(this.ccosto);
    this.resultsLength = this.ccosto.length;
  }
 
  Update(id:number)
  {
    this.edit.emit(id);
  }
  Delete(id:number)
  {
    this.delete.emit(id);
  }
  PrintAccount()
  {

  }

}

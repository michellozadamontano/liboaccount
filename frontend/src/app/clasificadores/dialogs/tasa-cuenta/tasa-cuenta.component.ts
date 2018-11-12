import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';
import * as fromStore        from '../../store';
import { Tasa_Cuenta }       from '../../models/tasa_cuenta.interface';

import { MatDialogRef, MAT_DIALOG_DATA }    from '@angular/material';
import { MatTableDataSource, MatDialog } 		from '@angular/material';
import { MatPaginator, MatSort }            from '@angular/material';

@Component({
  selector: 'app-tasa-cunta',
  templateUrl: './tasa-cuenta.component.html',
  styleUrls: ['./tasa-cuenta.component.scss']
})
export class TasaCuentaComponent implements OnInit {

  tasaCuentas$ : Observable<Tasa_Cuenta[]>

  public displayedColumns = ['Cuenta','Titulo'];
  resultsLength = 0;
  public dataSource 		: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private dialogRef       : MatDialogRef<TasaCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.store.select(fromStore.getTasaCuentas).subscribe(tasa =>{
      this.dataSource = new MatTableDataSource(tasa);
    })  
    
    this.store.dispatch(new fromStore.LoadTasaCuenta({id:this.data.id}));

  }

}

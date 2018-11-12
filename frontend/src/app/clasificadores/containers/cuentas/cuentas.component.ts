import { Component, OnInit, ViewChild }     from '@angular/core';
import {MatTableDataSource, MatDialog} 		  from '@angular/material';
import {MatPaginator, MatSort}              from '@angular/material';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Moneda }     from '../../models/moneda.interface';

//---------------------------
// Dialog
//---------------------------

import { FormCuentaComponent }  from '../../dialogs/form-cuenta/form-cuenta.component';
import { Cuenta } from '../../models/cuenta.interface';
import { Ccosto } from '../../models/ccosto.interface';
import { CuentaList } from '../../models/cuenta_list.interface';
import { PrintCuentaComponent } from '../../dialogs/print-cuenta/print-cuenta.component';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  monedas$  : Observable<Moneda[]>;
  loading   : boolean;
  cuenta$   : Observable<CuentaList[]>;
  ccosto$   : Observable<Ccosto[]>;
  message   : string;
  public displayedColumns = ['Cuenta','Descripcion','Moneda','Tipo','Actions'];
  resultsLength = 0;
  public dataSource 		: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private store: Store<fromStore.ClasificadorState>,     
    public dialog: MatDialog  
  ) { }

  ngOnInit() {
    this.monedas$ = this.store.select(fromStore.getMonedas);    
    this.cuenta$ = this.store.select(fromStore.getCuenta);
    this.store.select(fromStore.getCuenta).subscribe(cuentas =>{
      this.dataSource = new MatTableDataSource(cuentas);
      this.resultsLength = cuentas.length;
    });
    

    this.store.dispatch(new fromStore.CargaMoneda());
   
     this.store.select(fromStore.getMonedaLoading).subscribe(resp => {
      this.loading = resp
    });   
    this.store.dispatch(new fromStore.LoadCuenta());      
        
  }

  AddCuenta()
  {
    //this.modalService.open(FormCuentaComponent);
    const dialogRef = this.dialog.open(FormCuentaComponent, {
      width: '50%',
      data: {}
    });
  }
  UpdateCuenta(id:any)
  {       
    const dialogRef = this.dialog.open(FormCuentaComponent, {
      width: '50%',
      data: {id:id}
    });
  }
  DeleteCuenta(id:any)
  {
    console.log(id);
    this.store.dispatch(new fromStore.DeleteCuenta(id));
    
  }
  PrintAccount()
  {
    //this.modalService.open(FormCuentaComponent);
    const dialogRef = this.dialog.open(PrintCuentaComponent, {
      width: '50%',
      data: {}
    });
  }

}

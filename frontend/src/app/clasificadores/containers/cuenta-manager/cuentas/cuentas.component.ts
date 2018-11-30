import { Component, OnInit, ViewChild, ElementRef, AfterViewInit }     from '@angular/core';
import {MatTableDataSource, MatDialog} 		  from '@angular/material';
import {MatPaginator, MatSort}              from '@angular/material';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable, fromEvent, merge } from 'rxjs';
import * as fromStore from '../../../store';
import { Moneda }     from '../../../models/moneda.interface';

//---------------------------
// Dialog
//---------------------------

import { FormCuentaComponent }  from '../../../dialogs/form-cuenta/form-cuenta.component';

import { Ccosto } from '../../../models/ccosto.interface';
import { CuentaList } from '../../../models/cuenta_list.interface';
import { PrintCuentaComponent } from '../../../dialogs/print-cuenta/print-cuenta.component';
import { Router } from '@angular/router';
import { CuentasDataSource } from 'src/app/clasificadores/services/cuenta.datasource';
import { CuentaService } from 'src/app/clasificadores/services';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit, AfterViewInit  {

  monedas$  : Observable<Moneda[]>;
  loading   : boolean;
  cuenta$   : Observable<CuentaList[]>;
  ccosto$   : Observable<Ccosto[]>;
  message   : string;
  public displayedColumns = ['Cuenta','Descripcion','Moneda','Tipo','Actions'];
  resultsLength = 0;
  public dataSource 		: CuentasDataSource;//MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private store: Store<fromStore.ClasificadorState>,     
    public dialog: MatDialog,
    private route: Router,
    private cuentaService: CuentaService  
  ) { }

  ngOnInit() {
    this.monedas$ = this.store.select(fromStore.getMonedas);    
    this.cuenta$ = this.store.select(fromStore.getCuenta);
    /*this.store.select(fromStore.getCuenta).subscribe(cuentas =>{
      //this.dataSource = new MatTableDataSource(cuentas);
      this.resultsLength = cuentas.length;
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });*/
    this.store.dispatch(new fromStore.LoadCuentaCount());
    this.store.select(fromStore.getCuentaCount).subscribe(resp => {
      this.resultsLength = resp
    })
    this.dataSource = new CuentasDataSource(this.cuentaService);
    this.dataSource.loadCuenta(0,3);   
    

    this.store.dispatch(new fromStore.CargaMoneda());
   
     this.store.select(fromStore.getMonedaLoading).subscribe(resp => {
      this.loading = resp
    });   
    this.store.dispatch(new fromStore.LoadCuenta());      
        
  }
  applyFilter(filterValue: string) {
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  handle(paginator){
    console.log("pag "+paginator.value);
  }
  ngAfterViewInit() {
    
    //this.dataSource.paginator = this.paginator;
   // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadCuentaPage();
                })
            )
            .subscribe();

        merge( this.paginator.page)
        .pipe(
            tap(() => this.loadCuentaPage())
        )
        .subscribe();

  }
  loadCuentaPage() {
    this.dataSource.loadCuenta(        
        this.paginator.pageIndex,
        this.paginator.pageSize);
}

  AddCuenta()
  {
    //this.modalService.open(FormCuentaComponent);
    this.route.navigate(['clasificadores/cuenta-new']);
    /*const dialogRef = this.dialog.open(FormCuentaComponent, {
      width: '50%',
      data: {}
    });*/
  }
  UpdateCuenta(id:any)
  {     
    this.route.navigate(['clasificadores/cuenta-edit/',id]);  
    /*const dialogRef = this.dialog.open(FormCuentaComponent, {
      width: '50%',
      data: {id:id}
    });*/
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

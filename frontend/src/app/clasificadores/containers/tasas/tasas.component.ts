import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar } 		from '@angular/material';
import { MatPaginator, MatSort }  from '@angular/material';

// ngrx
import { Store }            from '@ngrx/store';
import { Observable }       from 'rxjs';
import * as fromStore       from '../../store';
import { Tasas }            from '../../models/tasas.interface';
import { TasaCuentaComponent } from '../../dialogs/tasa-cuenta/tasa-cuenta.component';
import { FormTasaComponent } from '../../dialogs/form-tasa/form-tasa.component';

@Component({
  selector: 'app-tasas',
  templateUrl: './tasas.component.html',
  styleUrls: ['./tasas.component.css']
})
export class TasasComponent implements OnInit {
  
  tasas$          : Observable<Tasas[]>;
  tasa$           : Observable<Tasas[]>;
  message$        : Observable<string>;

  public displayedColumns = ['Codigo','Descripcion','Tasa', '% Deprec','Actions'];
  resultsLength = 0;
  public dataSource 		            : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort          : MatSort;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    public dialog: MatDialog,
    private snackBarService :MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTasas());
    this.tasas$   = this.store.select(fromStore.getTasas);
    this.tasa$    = this.store.select(fromStore.getTasa);
    this.message$ = this.store.select(fromStore.getTasasMessage);
    this.store.select(fromStore.getTasas).subscribe(resp => {      
      this.dataSource = new MatTableDataSource(resp);
      this.resultsLength = resp.length;
    })
  }

  UpdateTasa(id:number) 
  {
    this.store.dispatch(new fromStore.LoadTasaById(id));
    let tasa: any;
    this.tasa$.subscribe(tasa => {
      console.log(tasa);
      if(tasa[0] != null){
        tasa = tasa;
      }  
    })
    const dialogRef = this.dialog.open(FormTasaComponent, {
      width: '50%',
      data: {id:id}
    });
    
    
  }
  DeleteTasa(id: number)
  {
    console.log(id);
    this.store.dispatch(new fromStore.DeleteTasa(id));
    this.message$.subscribe(message => {
      console.log(message);
      
      this.snackBarService.dismiss();    
      this.snackBarService.open( message, undefined, {duration: 2000} ); 
    });  
    
  }
  ShowCuentas(id: number)
  {   
    const dialogRef = this.dialog.open(TasaCuentaComponent, {
      width: '50%',
      data: {id:id}
    });
  }
  AddTasa()
  {
    const dialogRef = this.dialog.open(FormTasaComponent, {
      width: '50%',
      data: {}
    });
  }

}

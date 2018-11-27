import {  ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { Ccosto }     from '../../../models/ccosto.interface';
import { Router }     from '@angular/router';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ccosto-new',
  templateUrl: './ccosto-new.component.html',
  styleUrls: ['./ccosto-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoNewComponent implements OnInit {
  cuentasDepreMN$   : Observable<CuentaPrint[]>;
  cuentasDepreDIV$  : Observable<CuentaPrint[]>;
  siCodigo$         : Observable<any>; 

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router,
    private snackBarService :MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCuentaGastoDepreDiv({tipoId:3,moneId:2}));
    this.store.dispatch(new fromStore.LoadCuentaGastoDepre({tipoId:3,moneId:1}));
    this.cuentasDepreMN$ = this.store.select(fromStore.getCuentaGastoDepre);    
    this.cuentasDepreDIV$ = this.store.select(fromStore.getCuentaGastoDepreDiv);
    this.siCodigo$ = this.store.select(fromStore.getSiCodigo);
  }  
 
  submitted(ccosto: Ccosto) {
    console.log(ccosto);   
    this.store.dispatch(new fromStore.CheckCodigo(ccosto.codigo));
    this.siCodigo$ = this.store.select(fromStore.getSiCodigo);
    this.siCodigo$.subscribe(resp => {
      if(resp != 1)
      {        
        this.store.dispatch(new fromStore.InsertCosto(ccosto));
        this.router.navigate(['clasificadores/ccosto']);
            
      }
      else
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe!", undefined, {duration: 2000} );     
        return;     
      }
    }) 
    
  }
  checkCodigo(codigo:any)
  {
    console.log(codigo.target.value);
    let value = codigo.target.value;
    if(value > 0)
    {
      this.store.dispatch(new fromStore.CheckCodigo(value));
    }
   
    
  }  
  cancel()
  {

  }

}

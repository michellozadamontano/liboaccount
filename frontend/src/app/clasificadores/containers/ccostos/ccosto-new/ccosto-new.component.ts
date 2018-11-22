import {  ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { Ccosto }     from '../../../models/ccosto.interface';
import { Router }     from '@angular/router';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';

@Component({
  selector: 'app-ccosto-new',
  templateUrl: './ccosto-new.component.html',
  styleUrls: ['./ccosto-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoNewComponent implements OnInit {
  cuentasDepreMN$: Observable<CuentaPrint[]>;
  cuentasDepreDIV$: Observable<CuentaPrint[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router 
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCuentaGastoDepreDiv({tipoId:3,moneId:2}));
    this.store.dispatch(new fromStore.LoadCuentaGastoDepre({tipoId:3,moneId:1}));
    this.cuentasDepreMN$ = this.store.select(fromStore.getCuentaGastoDepre);    
    this.cuentasDepreDIV$ = this.store.select(fromStore.getCuentaGastoDepreDiv);
  }  
 
  submitted(ccosto: Ccosto) {
    console.log(ccosto);    
    this.store.dispatch(new fromStore.InsertCosto(ccosto));
    this.router.navigate(['clasificadores/ccosto']);
  }  
  cancel()
  {

  }

}

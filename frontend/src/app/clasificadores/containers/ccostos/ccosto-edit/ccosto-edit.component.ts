import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { CcostoList } from '../../../models/ccosto_list.interface';
import { Router, ActivatedRoute }       from '@angular/router';
import { Ccosto } from '../../../models/ccosto.interface';
import { CuentaPrint } from 'src/app/clasificadores/models/cuenta_print.interface';

@Component({
  selector: 'app-ccosto-edit',
  templateUrl: './ccosto-edit.component.html',
  styleUrls: ['./ccosto-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CcostoEditComponent implements OnInit {
  ccosto$ : Observable<Ccosto>;
  costo_id: number;
  cuentasDepreMN$: Observable<CuentaPrint[]>;
  cuentasDepreDIV$: Observable<CuentaPrint[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private ar : ActivatedRoute
  ) { }

  ngOnInit() {
    this.costo_id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadCostoById(this.costo_id));
    this.ccosto$ = this.store.select(fromStore.getCosto);    
    this.store.dispatch(new fromStore.LoadCuentaGastoDepreDiv({tipoId:3,moneId:2}));
    this.store.dispatch(new fromStore.LoadCuentaGastoDepre({tipoId:3,moneId:1}));
    this.cuentasDepreMN$ = this.store.select(fromStore.getCuentaGastoDepre);    
    this.cuentasDepreDIV$ = this.store.select(fromStore.getCuentaGastoDepreDiv);
  }
  
  submitted(ccosto: Ccosto) {    
      
    this.store.dispatch(new fromStore.UpdateCosto({id:this.costo_id,ccosto: ccosto}));
    this.router.navigate(['clasificadores/ccosto']);
  } 

}

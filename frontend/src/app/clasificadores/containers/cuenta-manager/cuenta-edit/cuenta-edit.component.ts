import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { CcostoList } from '../../../models/ccosto_list.interface';
import { Router, ActivatedRoute }       from '@angular/router';
import { Moneda } from 'src/app/clasificadores/models/moneda.interface';
import { TipoCuenta } from 'src/app/clasificadores/models/tipo_cuenta.interface';
import { Cuenta } from 'src/app/clasificadores/models/cuenta.interface';

@Component({
  selector: 'app-cuenta-edit',
  templateUrl: './cuenta-edit.component.html',
  styleUrls: ['./cuenta-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaEditComponent implements OnInit {
  monedas$    : Observable<Moneda[]>;
  tipocuenta$ : Observable<TipoCuenta[]>;
  ccostos$    : Observable<CcostoList[]>;
  cuenta$     : Observable<Cuenta>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private ar : ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadCuentaById({id: id}));
    this.cuenta$ = this.store.select(fromStore.getCuentaById);    

    this.store.dispatch(new fromStore.CargaMoneda);
    this.store.dispatch(new fromStore.LoadTipoCuenta);
    this.store.dispatch(new fromStore.LoadCosto);
    this.monedas$ = this.store.select(fromStore.getMonedas);
    this.tipocuenta$ = this.store.select(fromStore.getTipoCuentas);
    this.ccostos$ = this.store.select(fromStore.getCostos);
  }
  submit(cuenta: Cuenta)
  {
      this.store.dispatch(new fromStore.UpdateCuenta({cuenta:cuenta}));
      this.router.navigate(['clasificadores/cuentas']);
  }

}

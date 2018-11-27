import {  ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// ngrx
import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';
import { Router }     from '@angular/router';
import { Moneda } from 'src/app/clasificadores/models/moneda.interface';
import { TipoCuenta } from 'src/app/clasificadores/models/tipo_cuenta.interface';
import { Cuenta } from 'src/app/clasificadores/models/cuenta.interface';
import { Ccosto } from 'src/app/clasificadores/models/ccosto.interface';
import { CcostoList } from 'src/app/clasificadores/models/ccosto_list.interface';

@Component({
  selector: 'app-cuenta-new',
  templateUrl: './cuenta-new.component.html',
  styleUrls: ['./cuenta-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaNewComponent implements OnInit {
  monedas$    : Observable<Moneda[]>;
  tipocuenta$ : Observable<TipoCuenta[]>;
  ccostos$    : Observable<CcostoList[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.CargaMoneda);
    this.store.dispatch(new fromStore.LoadTipoCuenta);
    this.store.dispatch(new fromStore.LoadCosto);
    this.monedas$ = this.store.select(fromStore.getMonedas);
    this.tipocuenta$ = this.store.select(fromStore.getTipoCuentas);
    this.ccostos$ = this.store.select(fromStore.getCostos);
  }

  submit(form: Cuenta)
  {
    this.store.dispatch(new fromStore.InsertCuenta(form));
    this.router.navigate(['clasificadores/cuentas']);
  }

}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as tipoCuentaActions from '../actions/tipo_cuenta.actions';
import * as fromServices from '../../services';

@Injectable()
export class TipoCuentaEffects {
    constructor(
        private actions$: Actions,
        private tipoCuentaService: fromServices.TipoCuentaService
    ) {
        console.log(this.loadTipoCuenta$);
    }

    @Effect()
    loadTipoCuenta$ = this.actions$.ofType(tipoCuentaActions.LOAD_TIPOCUENTA)
    .pipe(
        switchMap(() => {
            return this.tipoCuentaService.GetTipoCuenta().pipe(
                map(tipo => new tipoCuentaActions.LoadTipoCuentaSuccess(tipo)),
                catchError(error => of(new tipoCuentaActions.LoadTipoCuentaError(error)))
            )
        })
    );
    
    
}
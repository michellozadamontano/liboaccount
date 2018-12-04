import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as monedaActions from '../actions/moneda.actions';
import * as fromServices from '../../../services';

@Injectable()
export class MonedaEffects {
    constructor(
        private actions$: Actions,
        private monedaService: fromServices.MonedaService
    ) {}

    @Effect()
    loadMoneda$ = this.actions$.ofType(monedaActions.CARGAR_MONEDA)
    .pipe(
        switchMap(() => {
            return this.monedaService.GetMonedas().pipe(
                map(moneda => new monedaActions.CargaMonedaExito(moneda)),
                catchError(error => of(new monedaActions.CargaMonedaError(error)))
            )
        })
    )
}
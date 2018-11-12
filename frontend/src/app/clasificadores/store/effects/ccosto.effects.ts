import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromCostoAction from '../actions/ccosto.action';
import * as fromServices from '../../services';

@Injectable()
export class CcostoEffects {
    constructor(
        private actions$: Actions,
        private costoService: fromServices.CcostoService
    ) {}

    @Effect()
    loadCosto$ = this.actions$.ofType(fromCostoAction.LOAD_COSTO).pipe(
        switchMap(() => {
            return this.costoService.GetCostos().pipe(
                map(costos => new fromCostoAction.LoadCostoSucces(costos)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
}
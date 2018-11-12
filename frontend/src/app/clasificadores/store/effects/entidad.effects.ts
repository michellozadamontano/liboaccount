import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromEntidadAction from '../actions/entidad.actions';
import * as fromServices from '../../services';

@Injectable()
export class EntidadEffects {
    constructor(
        private actions$        : Actions,
        private entidadService  : fromServices.EntidadService
    ){}

    @Effect()
    loadentidad$ = this.actions$.ofType(fromEntidadAction.LOAD_ENTIDAD)
    .pipe(
        switchMap(action =>            
            this.entidadService.GetEntidad().pipe(
                map(resp => new fromEntidadAction.LoadEntidadSuccess({entidad:resp['entidad']})),
                catchError(error => of(new fromEntidadAction.LoadEntidadError(error)))
            )

        )
    )
}

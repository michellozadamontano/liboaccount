import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromEntidadAction from '../actions/entidad.actions';
import * as fromServices from '../../../services';

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
                map(resp => new fromEntidadAction.LoadEntidadSuccess(resp)),
                catchError(error => of(new fromEntidadAction.LoadEntidadError(error)))
            )

        )
    )
    @Effect()
    createEntidad$ = this.actions$.ofType<fromEntidadAction.CreateEntidad>(fromEntidadAction.CREATE_ENTIDAD)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.entidadService.PostEntidad(payload).pipe(
                switchMap(message => [
                    new fromEntidadAction.LoadEntidad()
                ]),
                catchError(error => of(new fromEntidadAction.LoadEntidadError(error)))
            )
        })
    )
    @Effect()
    updateEntidad$ = this.actions$.ofType<fromEntidadAction.UpdateEntidad>(fromEntidadAction.UPDATE_ENTIDAD)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.entidadService.PutEntidad(payload).pipe(
               map(message => new fromEntidadAction.LoadEntidad()),
                catchError(error => of(new fromEntidadAction.LoadEntidadError(error)))
            )
        })
    )
}

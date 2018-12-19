
import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromCentroCostoAction        from '../actions/centro_costo.action';
import * as fromServices                from '../../../services';

@Injectable()
export class CentroCostoEffects {
    constructor(
        private actions$: Actions,
        private centrocostoService: fromServices.CentroCostoService
    ) {}

    @Effect()
    loadCentroCosto$ = this.actions$.ofType(fromCentroCostoAction.LOAD_CENTRO_COSTO,
        fromCentroCostoAction.CREATE_CENTRO_COSTO_SUCCESS     
        ).pipe(
        switchMap(() => {
            return this.centrocostoService.getCentroCostolist().pipe(
                map(centro_costos => new fromCentroCostoAction.LoadCentroCostoSuccess(centro_costos)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )
    @Effect()
    loadCentroCostoById$ = this.actions$.ofType<fromCentroCostoAction.LoadCentroCostoById>(
        fromCentroCostoAction.LOAD_CENTRO_COSTO_BY_ID).pipe(
            map(action => action.payload),
            switchMap((payload) => {
                return this.centrocostoService.getCentroCostoById(payload).pipe(
                    map(centro_costo => new fromCentroCostoAction.LoadCentroCostoByIdSuccess(centro_costo)),
                    catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
                )
            })
        )
   
    @Effect()
    createCentroCosto$ = this.actions$.ofType<fromCentroCostoAction.CreateCentroCosto>(
        fromCentroCostoAction.CREATE_CENTRO_COSTO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.createCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )   
    @Effect()
    updateCentroCosto$ = this.actions$.ofType<fromCentroCostoAction.UpdateCentroCosto>(
        fromCentroCostoAction.UPDATE_CENTRO_COSTO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.updateteCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    ) 
    @Effect()
    deleteCentroCosto$ = this.actions$.ofType<fromCentroCostoAction.DeleteCentroCosto>(
        fromCentroCostoAction.DELETE_CENTRO_COSTO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.deleteCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )     
    
}
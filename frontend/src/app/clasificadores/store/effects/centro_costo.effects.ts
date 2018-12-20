
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
    loadCentroCosto$ = this.actions$.pipe(ofType(fromCentroCostoAction.LOAD_CENTRO_COSTO,
        fromCentroCostoAction.CREATE_CENTRO_COSTO_SUCCESS     
        ),
        switchMap(() => {
            return this.centrocostoService.getCentroCostolist().pipe(
                map(centro_costos => new fromCentroCostoAction.LoadCentroCostoSuccess(centro_costos)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )
    @Effect()
    loadCentroCostoById$ = this.actions$.pipe(ofType<fromCentroCostoAction.LoadCentroCostoById>(
        fromCentroCostoAction.LOAD_CENTRO_COSTO_BY_ID),
            map(action => action.payload),
            switchMap((payload) => {
                return this.centrocostoService.getCentroCostoById(payload).pipe(
                    map(centro_costo => new fromCentroCostoAction.LoadCentroCostoByIdSuccess(centro_costo)),
                    catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
                )
            })
        )
   
    @Effect()
    createCentroCosto$ = this.actions$.pipe(ofType<fromCentroCostoAction.CreateCentroCosto>(
        fromCentroCostoAction.CREATE_CENTRO_COSTO),
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.createCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )   
    @Effect()
    updateCentroCosto$ = this.actions$.pipe(ofType<fromCentroCostoAction.UpdateCentroCosto>(
        fromCentroCostoAction.UPDATE_CENTRO_COSTO),
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.updateteCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    ) 
    @Effect()
    deleteCentroCosto$ = this.actions$.pipe(ofType<fromCentroCostoAction.DeleteCentroCosto>(
        fromCentroCostoAction.DELETE_CENTRO_COSTO),
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.centrocostoService.deleteCentroCosto(payload).pipe(
                map(message => new fromCentroCostoAction.CreateCentroCostoSucces(message)),
                catchError(error => of(new fromCentroCostoAction.LoadCentroCostoError(error)))
            )
        })
    )     
    
}
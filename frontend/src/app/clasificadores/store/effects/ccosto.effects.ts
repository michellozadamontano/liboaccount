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
    loadCosto$ = this.actions$.ofType(fromCostoAction.LOAD_COSTO,
        fromCostoAction.INSERT_COSTO_SUCCESS,
        fromCostoAction.DELETE_COSTO_SUCCESS, fromCostoAction.UPDATE_COSTO_SUCCESS).pipe(
        switchMap(() => {
            return this.costoService.GetCostos().pipe(
                map(costos => new fromCostoAction.LoadCostoSucces(costos)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
    @Effect()
    loadCostoById = this.actions$.ofType<fromCostoAction.LoadCostoById>(fromCostoAction.LOAD_COSTO_BY_ID)
    .pipe(
        switchMap((costo)=>{
            return this.costoService.GetCostoById(costo.payload).pipe(
                map(result => new fromCostoAction.LoadCostoByIdSuccess(result)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
    @Effect()
    createCosto$ = this.actions$.ofType<fromCostoAction.InsertCosto>(fromCostoAction.INSERT_COSTO).pipe(
        switchMap((ccosto) => {
            return this.costoService.InsertCosto(ccosto.payload).pipe(
                map(message => new fromCostoAction.InsertCostoSuccess(message)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
    @Effect()
    updateCosto$ = this.actions$.ofType<fromCostoAction.UpdateCosto>(fromCostoAction.UPDATE_COSTO).pipe(
        switchMap((ccosto) => {
            return this.costoService.UpdateCosto(ccosto.payload.id,ccosto.payload.ccosto).pipe(
                map(message => new fromCostoAction.UpdateCostoSuscces(message)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
    @Effect()
    deleteCosto$ = this.actions$.ofType<fromCostoAction.DeleteCosto>(fromCostoAction.DELETE_COSTO).pipe(
        switchMap((ccosto) => {
            return this.costoService.DeleteCosto(ccosto.payload).pipe(
                map(message => new fromCostoAction.DeleteCostoSuccess(message)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
    @Effect()
    checkCodigo$ = this.actions$.ofType<fromCostoAction.CheckCodigo>(fromCostoAction.CHECK_CODIGO).pipe(
        switchMap((codigo)=>{
            return this.costoService.CheckCodigo(codigo.payload).pipe(
                map(result => new fromCostoAction.CheckCodigoSuccess(result)),
                catchError(error => of(new fromCostoAction.LoadCostoError(error)))
            )
        })
    )
}
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromTasaAction from '../actions/tasas.action';
import * as fromServices from '../../services';

@Injectable()
export class TasasEffects {
    constructor(
        private actions$: Actions,
        private tasaService: fromServices.TasasService
    ) {}

    @Effect()
    loadTasa$ = this.actions$.ofType(fromTasaAction.LOAD_TASAS, 
        fromTasaAction.INSERT_TASA_SUCCESS, fromTasaAction.UPDATE_TASA_SUCCESS, 
        fromTasaAction.DELETE_TASA_SUCCESS).pipe(
        switchMap(() => {
            return this.tasaService.GetTasas().pipe(
                map(tasa => new fromTasaAction.LoadTasasSucces(tasa)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )
    @Effect()
    loadTasaById$ = this.actions$.ofType<fromTasaAction.LoadTasaById>(fromTasaAction.LOAD_TASA_BY_ID).pipe(
        switchMap((tasa) => {
            return this.tasaService.GetTasaById(tasa.payload).pipe(
                map(tasa => new fromTasaAction.LoadTasaByIdSuccess(tasa)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )
    //este efecto es para agregar una tasa con todas sus dependencias 
    @Effect()
    insertTasa$ = this.actions$.ofType<fromTasaAction.InsertTasa>(fromTasaAction.INSERT_TASA).pipe(
        switchMap((tasa) => {
            return this.tasaService.InsertTasa(tasa.payload).pipe(
                map(message => new fromTasaAction.InsertTasaSuccess(message)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )   

    @Effect()
    loadTasaCuenta$ = this.actions$.ofType<fromTasaAction.LoadTasaCuenta>(fromTasaAction.LOAD_TASA_CUENTA).pipe(
        switchMap((tasa) => {           
            return this.tasaService.GetCuentasByTasaId(tasa.payload.id).pipe(
                map(tasa => new fromTasaAction.LoadTasaCuentaSuccess(tasa)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )

    @Effect()
    updateTasa$ = this.actions$.ofType<fromTasaAction.UpdateTasa>(fromTasaAction.UPDATE_TASA).pipe(
        switchMap((tasa)=> {
            return this.tasaService.UpdateTasa(tasa.payload.id,tasa.payload.tasa).pipe(
                map(message => new fromTasaAction.UpdateTasaSuccess(message)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )
    @Effect()
    deleteTasa$ = this.actions$.ofType<fromTasaAction.DeleteTasa>(fromTasaAction.DELETE_TASA).pipe(
        switchMap((tasa)=> {
            return this.tasaService.DeleteTasa(tasa.payload).pipe(
                map(message => new fromTasaAction.DeleteTasaSucces(message)),
                catchError(error => of(new fromTasaAction.LoadTassError(error)))
            )
        })
    )
}
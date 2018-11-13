import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromCuentaAction from '../actions/cuenta.actions';
import * as fromServices from '../../services';
import { Action } from '@ngrx/store';

@Injectable()
export class CuentaEffects {
    constructor(
        private actions$: Actions,
        private cuentaService: fromServices.CuentaService
    ){      
        
    }

    @Effect()
    loadcuenta$ = this.actions$.ofType(fromCuentaAction.LOAD_CUENTA)
    .pipe(
        switchMap(() => {
            return this.cuentaService.GetCuenta().pipe(
                map(cuenta => new fromCuentaAction.LoadCuentaSucces(cuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )

    @Effect()
    loadcuentabyId$ = this.actions$.ofType<fromCuentaAction.LoadCuentaById>(fromCuentaAction.LOAD_CUENTA_BY_ID)
    .pipe(
        switchMap((cuenta)=>{          
            
            return this.cuentaService.GetCuentaById(cuenta.payload).pipe(
                map(cuenta => new fromCuentaAction.GetCuentaById(cuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
    @Effect()
    loadcuetnabyTipo$ = this.actions$.ofType<fromCuentaAction.LoadCuentaPrint>(fromCuentaAction.LOAD_CUENTA_PRINT)
    .pipe(
        switchMap((print)=>{
            return this.cuentaService.GetCuentaByTipo(print.payload).pipe(
                map(printcuenta => new fromCuentaAction.LoadCuentaPrintSuccess(printcuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
    @Effect()
    loadcuentaTitulo$ = this.actions$.ofType<fromCuentaAction.LoadCuentaTitulo>(fromCuentaAction.LOAD_CUENTA_TITULO)
    .pipe(
        switchMap((print)=>{
            return this.cuentaService.GetCuentaByTipo(print.payload).pipe(
                map(printcuenta => new fromCuentaAction.LoadCuentaTituloSuccess(printcuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
    @Effect()
    loadcuentaDepre$ = this.actions$.ofType<fromCuentaAction.LoadCuentaDepre>(fromCuentaAction.LOAD_CUENTA_DEPRE)
    .pipe(
        switchMap((print)=>{
            return this.cuentaService.GetCuentaByTipo(print.payload).pipe(
                map(printcuenta => new fromCuentaAction.LoadCuentaDepreSuccess(printcuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
    @Effect()
    loadcuentaSobrante$ = this.actions$.ofType<fromCuentaAction.LoadCuentaSobrante>(fromCuentaAction.LOAD_CUENTA_SOBRANTE)
    .pipe(
        switchMap((print)=>{
            return this.cuentaService.GetCuentaByTipo(print.payload).pipe(
                map(printcuenta => new fromCuentaAction.LoadCuentaSobranteSuccess(printcuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
    @Effect()
    loadcuentaFaltante$ = this.actions$.ofType<fromCuentaAction.LoadCuentaFaltante>(fromCuentaAction.LOAD_CUENTA_FALTANTE)
    .pipe(
        switchMap((print)=>{
            return this.cuentaService.GetCuentaByTipo(print.payload).pipe(
                map(printcuenta => new fromCuentaAction.LoadCuentaFaltanteSuccess(printcuenta)),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )

    @Effect()
    insertCuenta$:Observable<Action> = this.actions$.ofType<fromCuentaAction.InsertCuenta>(fromCuentaAction.INSERT_CUENTA)
    .pipe(         
        switchMap(cuent => 
             this.cuentaService.InsertCuenta(cuent.payload).pipe(
                map(cuenta => new fromCuentaAction.LoadCuenta()),
                catchError(error => of(new fromCuentaAction.InsertCuentaError(error)))
            )   
        )
    );

    @Effect()
    updateCuenta$ = this.actions$.ofType<fromCuentaAction.UpdateCuenta>(fromCuentaAction.UPDATE_CUENTA)
    .pipe(
        switchMap(cuenta =>{
            return this.cuentaService.UpdateCuenta(cuenta.payload.id, cuenta.payload.cuenta).pipe(
                map(()=> new fromCuentaAction.LoadCuenta()),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    );
    @Effect()
    deleteCuenta$ = this.actions$.ofType<fromCuentaAction.DeleteCuenta>(fromCuentaAction.DELETE_CUENTA)
    .pipe(
        switchMap(cuenta => {
            return this.cuentaService.DeleteCuenta(cuenta.payload).pipe(
                map(()=> new fromCuentaAction.LoadCuenta()),
                catchError(error => of(new fromCuentaAction.LoadCuentaError(error)))
            )
        })
    )
}
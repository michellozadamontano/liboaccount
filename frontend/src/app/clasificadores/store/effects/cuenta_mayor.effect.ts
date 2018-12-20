import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromMayorAction from '../actions/cuenta_mayor.action';
//import all requried services or any dependencies
import * as fromServices from '../../../services';

@Injectable()
export class MayorEffects {
    constructor(
        private action$: Actions,
        private mayorService: fromServices.CuentaMayorService
        ) { }

    @Effect()
    loadMayor$ = this.action$.pipe(ofType(fromMayorAction.LOAD_CUENTA_MAYOR,
        fromMayorAction.CUENTA_MAYOR_SUCCESS),
        switchMap(() => {
            return this.mayorService.getCuentaMayor().pipe(
                map(data => new fromMayorAction.LoadCuentaMayorSuccess(data)),
                catchError(error => of(new fromMayorAction.LoadCuentaMayorFail(error)))                
            );
        })
    );
    @Effect()
    loadMayorById$ = this.action$.pipe(ofType<fromMayorAction.LoadCuentaMayorById>(fromMayorAction.LOAD_CUENTA_MAYOR_BY_ID),
    
        map(action => action.payload),
        switchMap((payload) => {
            return this.mayorService.getCuentaMayorById(payload).pipe(
                map(data => new fromMayorAction.LoadCuentaMayorByIdSuccess(data)),
                catchError(error => of(new fromMayorAction.LoadCuentaMayorFail(error)))                
            );
        })
    );

    @Effect()
    createMayor$ = this.action$.pipe(ofType<fromMayorAction.CreateCuentaMayor>(fromMayorAction.CREATE_CUENTA_MAYOR),
    
        map(action => action.payload),
        switchMap((payload) => {
            return this.mayorService.createCuentaMayor(payload).pipe(
                map(data => new fromMayorAction.CuentaMayorSuccess(data)),
                catchError(error => of(new fromMayorAction.LoadCuentaMayorFail(error)))                
            );
        })
    );
    @Effect()
    updateMayor$ = this.action$.pipe(ofType<fromMayorAction.UpdateCuentaMayor>(fromMayorAction.UPDATE_CUENTA_MAYOR),
    
        map(action => action.payload),
        switchMap((payload) => {
            return this.mayorService.updateCuentaMayor(payload).pipe(
                map(data => new fromMayorAction.CuentaMayorSuccess(data)),
                catchError(error => of(new fromMayorAction.LoadCuentaMayorFail(error)))                
            );
        })
    );
    @Effect()
    deleteMayor$ = this.action$.pipe(ofType<fromMayorAction.DeleteCuentaMayor>(fromMayorAction.DELETE_CUENTA_MAYOR),
    
        map(action => action.payload),
        switchMap((payload) => {
            return this.mayorService.deleteCuentaMayor(payload).pipe(
                map(data => new fromMayorAction.CuentaMayorSuccess(data)),
                catchError(error => of(new fromMayorAction.LoadCuentaMayorFail(error)))                
            );
        })
    );
}
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromPlanAction  from '../actions/cuenta_plan.action';
import * as fromService     from '../../../services';
//import all requried services or any dependencies

@Injectable()
export class CuentaPlanEffects {
    constructor(
        private action$: Actions,
        private myService: fromService.CuentaPlanService
        ) { }

    @Effect()
    loadCuentaPlan$ = this.action$.pipe(ofType(fromPlanAction.LOAD_CUENTA_PLAN,fromPlanAction.CUENTA_PLAN_SUCCESS),
        switchMap(() => {
            return this.myService.getCuentaPlan().pipe(
                map(data => new fromPlanAction.LoadCuentaPlanSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
    @Effect()
    loadCuentaPlanById$ = this.action$.pipe(ofType<fromPlanAction.LoadCuentaPlanById>(fromPlanAction.LOAD_CUENTA_PLAN_BY_ID),
        map(action => action.payload),
        switchMap((payload) => {
            return this.myService.getCuentaPlanById(payload).pipe(
                map(data => new fromPlanAction.LoadCuentaPlanByIdSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
    @Effect()
    loadCuentaPlanByTipoId$ = this.action$.pipe(ofType<fromPlanAction.GetCuentaByTipo>(fromPlanAction.GET_CUENTA_PLAN_BY_TIPO),
        map(action => action.payload),
        switchMap((payload) => {
            return this.myService.getbyTipoId(payload).pipe(
                map(data => new fromPlanAction.GetCuentaByTipoSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
    @Effect()
    createCuentaPlan$ = this.action$.pipe(ofType<fromPlanAction.CreateCuentaPlan>(fromPlanAction.CREATE_CUENTA_PLAN),
        map(action => action.payload),
        switchMap((payload) => {
            return this.myService.createCuentaPlan(payload).pipe(
                map(data => new fromPlanAction.CuentaPlanSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
    @Effect()
    updateCuentaPlan$ = this.action$.pipe(ofType<fromPlanAction.UpdateCuentaPlan>(fromPlanAction.UPDATE_CUENTA_PLAN),
        map(action => action.payload),
        switchMap((payload) => {
            return this.myService.updateCuentaPlan(payload).pipe(
                map(data => new fromPlanAction.CuentaPlanSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
    @Effect()
    deleteCuentaPlan$ = this.action$.pipe(ofType<fromPlanAction.DeleteCuentaPlan>(fromPlanAction.DELETE_CUENTA_PLAN),
        map(action => action.payload),
        switchMap((payload) => {
            return this.myService.deleteCuentaPlan(payload).pipe(
                map(data => new fromPlanAction.CuentaPlanSuccess(data)),
                catchError(error => of(new fromPlanAction.LoadCuentaPlanFail(error)))                
            );
        })
    );
}
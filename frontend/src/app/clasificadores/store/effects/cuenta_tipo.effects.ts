import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromCuentaTipoAction        from '../actions/cuenta_tipo.action';
import * as fromServices                from '../../../services';

@Injectable()
export class CuentaTipoEffects {
    constructor(
        private actions$: Actions,
        private cuentatipoService: fromServices.CuentaTipoService
    ) {}

    @Effect()
    loadCuentaTipo$ = this.actions$.ofType(fromCuentaTipoAction.LOAD_CUENTA_TIPO,
        fromCuentaTipoAction.CREATE_CUENTA_TIPO_SUCCESS     
        ).pipe(
        switchMap(() => {
            return this.cuentatipoService.getCuentaTipoList().pipe(
                map(cuentasTipo => new fromCuentaTipoAction.LoadCuentaTipoSuccess(cuentasTipo)),
                catchError(error => of(new fromCuentaTipoAction.LoadCuentaTipoError(error)))
            )
        })
    )
    @Effect()
    loadCuentaTipoById$ = this.actions$.ofType<fromCuentaTipoAction.LoadCuentaTipoById>(
        fromCuentaTipoAction.LOAD_CUENTA_TIPO_BY_ID).pipe(
            map(action => action.payload),
            switchMap((payload) => {
                return this.cuentatipoService.getCuentaTipoById(payload).pipe(
                    map(cuenta => new fromCuentaTipoAction.LoadCuentaTipoByIdSuccess(cuenta)),
                    catchError(error => of(new fromCuentaTipoAction.LoadCuentaTipoError(error)))
                )
            })
        )
   
    @Effect()
    createCuentaTipo$ = this.actions$.ofType<fromCuentaTipoAction.CreateCuentaTipo>(
        fromCuentaTipoAction.CREATE_CUENTA_TIPO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.cuentatipoService.createCuentaTipo(payload).pipe(
                map(message => new fromCuentaTipoAction.CreateCuentaTipoSuccess(message)),
                catchError(error => of(new fromCuentaTipoAction.LoadCuentaTipoError(error)))
            )
        })
    )   
    @Effect()
    updateCuentaTipo$ = this.actions$.ofType<fromCuentaTipoAction.UpdateCuentaTipo>(
        fromCuentaTipoAction.UPDATE_CUENTA_TIPO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.cuentatipoService.updateCuentaTipo(payload).pipe(
                map(message => new fromCuentaTipoAction.CreateCuentaTipoSuccess(message)),
                catchError(error => of(new fromCuentaTipoAction.LoadCuentaTipoError(error)))
            )
        })
    ) 
    @Effect()
    deleteCuentaTipo$ = this.actions$.ofType<fromCuentaTipoAction.DeleteCuentaTipo>(
        fromCuentaTipoAction.DELETE_CUENTA_TIPO).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.cuentatipoService.deleteCuentaTipo(payload).pipe(
                map(message => new fromCuentaTipoAction.CreateCuentaTipoSuccess(message)),
                catchError(error => of(new fromCuentaTipoAction.LoadCuentaTipoError(error)))
            )
        })
    )     
    
}
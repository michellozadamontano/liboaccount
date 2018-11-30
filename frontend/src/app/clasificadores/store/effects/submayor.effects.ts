import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as submayorActions from '../actions/submayor.action';
import * as fromServices from '../../services';

@Injectable()
export class SubmayorEffects {
    constructor(
        private actions$: Actions,
        private submayorService: fromServices.SubmayorService
    ) {}

    @Effect()
    loadSubmayor$ = this.actions$.ofType<submayorActions.LoadSubmayor>(submayorActions.LOAD_SUBMAYOR).pipe(
        switchMap((sub)=> {
            return this.submayorService.getSubmayor(sub.payload).pipe(
                map(result => new submayorActions.LoadSubmayorSuccess(result)),
                catchError(error => of(new submayorActions.LoadSubmayorError(error)))
            )
        })
    )
    @Effect()
    loadSubmayorById$ = this.actions$.ofType<submayorActions.LoadSubmayorById>(submayorActions.LOAD_SUBMAYOR_BY_ID).pipe(
        switchMap((sub)=> {
            return this.submayorService.getSubmayorById(sub.payload).pipe(
                map(result => new submayorActions.LoadSubmayorByIdSuccess(result)),
                catchError(error => of(new submayorActions.LoadSubmayorError(error)))
            )
        })
    )

    @Effect()
    createSubmayor$ = this.actions$.ofType<submayorActions.CreateSubmayor>(submayorActions.CREATE_SUBMAYOR)
    .pipe(
        switchMap((submayor)=> {           
            return this.submayorService.createSubmayor(submayor.payload).pipe(
                switchMap(res => [
                    new submayorActions.CreateSubmayorSuccess(res),
                    new submayorActions.LoadSubmayor(submayor.payload.generico_id)
                ]),
               
                catchError(error => of(new submayorActions.LoadSubmayorError(error)))
            )
        })
    )
    @Effect()
    updateSubmayor$ = this.actions$.ofType<submayorActions.UpdateSubmayor>(submayorActions.UPDATE_SUBMAYOR)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.submayorService.updateSubmayor(payload).pipe(
                switchMap(res => [
                    new submayorActions.UpdateSubmayorSuccess(res),
                    new submayorActions.LoadSubmayor(payload.generico_id)
                ]),               
                catchError(error => of(new submayorActions.LoadSubmayorError(error)))
            )
        })
    )
    @Effect()
    deleteSubmayor$ = this.actions$.ofType<submayorActions.DeleteSubmayor>(submayorActions.DELETE_SUBMAYOR)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.submayorService.deleteSubmayor(payload).pipe(
                map(result => new submayorActions.LoadSubmayor(payload.generico_id)),
                catchError(error => of(new submayorActions.LoadSubmayorError(error)))
            )
        })
    )

}
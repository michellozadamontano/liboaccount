import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromGenericoAction          from '../actions/generico.action';
import * as fromServices                from '../../services';

@Injectable()
export class GenericoEffects {
    constructor(
        private actions$: Actions,
        private genericoService: fromServices.GenericoService
    ) {}

    @Effect()
    loadGenerico$ = this.actions$.ofType(fromGenericoAction.LOAD_GENERICO,
        fromGenericoAction.CREATE_GENERICO_SUCCESS,
        fromGenericoAction.UPDATE_GENERICO_SUCCESS, fromGenericoAction.DELETE_GENERICO_SUCCESS).pipe(
        switchMap(() => {
            return this.genericoService.getGenerico().pipe(
                map(list => new fromGenericoAction.LoadGenericoSuccess(list)),
                catchError(error => of(new fromGenericoAction.LoadGenericoError(error)))
            )
        })
    )
    @Effect()
    loadById$ = this.actions$.ofType<fromGenericoAction.GenericoById>(fromGenericoAction.GENERICO_BY_ID)
    .pipe(
        switchMap((generico)=> {
            return this.genericoService.getGenericoById(generico.payload).pipe(
                map(result => new fromGenericoAction.GenericoByIdSuccess(result)),
                catchError(error => of(new fromGenericoAction.LoadGenericoError(error)))
            )
        })
    )
   
    @Effect()
    createGenerico$ = this.actions$.ofType<fromGenericoAction.CreateGenerico>(fromGenericoAction.CREATE_GENERICO).pipe(
        switchMap((generico) => {
            return this.genericoService.createGenerico(generico.payload).pipe(
                map(message => new fromGenericoAction.CreateGenericoSucces(message)),
                catchError(error => of(new fromGenericoAction.LoadGenericoError(error)))
            )
        })
    )
    @Effect()
    updateGenerico$ = this.actions$.ofType<fromGenericoAction.UpdateGenerico>(fromGenericoAction.UPDATE_GENERICO).pipe(
        switchMap((generico) => {
            return this.genericoService.updateGenerico(generico.payload).pipe(
                map(message => new fromGenericoAction.UpdateGenericoSuccess(message)),
                catchError(error => of(new fromGenericoAction.LoadGenericoError(error)))
            )
        })
    )
    @Effect()
    deleteGenerico$ = this.actions$.ofType<fromGenericoAction.DeleteGenerico>(fromGenericoAction.DELETE_GENERICO).pipe(
        switchMap((gen) => {
            return this.genericoService.deleteGenerico(gen.payload).pipe(
                map(message => new fromGenericoAction.DeleteGenericoSuccess(message)),
                catchError(error => of(new fromGenericoAction.LoadGenericoError(error)))
            )
        })
    )
}
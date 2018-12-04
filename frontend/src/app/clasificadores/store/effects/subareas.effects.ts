import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromSubAreaAction from '../actions/subarea.action';
import * as fromServices from '../../../services';

@Injectable()
export class SubAreasEffects {
    constructor(
        private actions$: Actions,
        private subAreaService: fromServices.SubareasService
    ) {}

    @Effect()
    loadSubArea$ = this.actions$.ofType<fromSubAreaAction.LoadSubArea>(fromSubAreaAction.LOAD_SUB_AREAS).pipe(
            map(action =>action.payload),
            switchMap((payload) => {
            return this.subAreaService.getSubAreas(payload).pipe(
                map(subareas => new fromSubAreaAction.LoadSubAreaSuccess(subareas)),
                catchError(error => of(new fromSubAreaAction.LoadSubAreaError(error)))
            )
        })
    )

    @Effect()
    createSubArea$ = this.actions$.ofType<fromSubAreaAction.CreateSubArea>(fromSubAreaAction.CREATE_SUB_AREA)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.subAreaService.createSubArea(payload).pipe(
                switchMap(message => [
                    new  fromSubAreaAction.CreateSubAreaSuccess(message),
                    new fromSubAreaAction.LoadSubArea(payload.area_id)
                ]),                
                catchError(error => of(new fromSubAreaAction.LoadSubAreaError(error)))
            )
        })
    )
    @Effect()
    updateSubArea$ = this.actions$.ofType<fromSubAreaAction.UpdateSubArea>(fromSubAreaAction.UPDATE_SUB_AREA)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.subAreaService.updateSubArea(payload).pipe(
                switchMap(message => [
                    new  fromSubAreaAction.UpdateSubAreaSuccess(message),
                    new fromSubAreaAction.LoadSubArea(payload.area_id)
                ]),                
                catchError(error => of(new fromSubAreaAction.LoadSubAreaError(error)))
            )
        })
    )
    @Effect()
    deleteSubArea$ = this.actions$.ofType<fromSubAreaAction.DeleteSubArea>(fromSubAreaAction.DELETE_SUB_AREA)
    .pipe(
        map(action => action.payload),
        switchMap((payload) => {
            return this.subAreaService.deleteSubArea(payload.id).pipe(
                switchMap(message => [
                    new fromSubAreaAction.DeleteSubAreaSuccess(message),
                    new fromSubAreaAction.LoadSubArea(payload.area_id)
                ]),                
                catchError(error => of(new fromSubAreaAction.LoadSubAreaError(error)))
            )
        })
    )
}
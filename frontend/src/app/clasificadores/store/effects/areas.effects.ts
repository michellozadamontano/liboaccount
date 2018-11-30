import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromAreaAction from '../actions/areas.action';
import * as fromServices from '../../services';

@Injectable()
export class AreasEffects {
    constructor(
        private actions$: Actions,
        private areaService: fromServices.AreasService
    ) {}

    @Effect()
    loadArea$ = this.actions$.ofType(fromAreaAction.LOAD_AREA, fromAreaAction.CREATE_AREA_SUCCES,        
        fromAreaAction.UPDATE_AREA_SUCCESS, fromAreaAction.DELETE_AREA_SUCCESS).pipe(
        switchMap(() => {
            return this.areaService.getArea().pipe(
                map(areas => new fromAreaAction.LoadAreaSuccess(areas)),
                catchError(error => of(new fromAreaAction.LoadAreaError(error)))
            )
        })
    )
    @Effect()
    loadAreaById = this.actions$.ofType<fromAreaAction.LoadAreaById>(fromAreaAction.LOAD_AREA_BY_ID).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.areaService.getAreaById(payload).pipe(
                map(area => new fromAreaAction.LoadAreaByIdSuccess(area)),
                catchError(error => of(new fromAreaAction.LoadAreaError(error)))
            )
        })
    )
    @Effect()
    createArea = this.actions$.ofType<fromAreaAction.CreateArea>(fromAreaAction.CREATE_AREA).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.areaService.createArea(payload).pipe(
                map(message => new fromAreaAction.CreateAreaSucces(message)),
                catchError(error => of(new fromAreaAction.LoadAreaError(error)))
            )
        })
    )

    @Effect()
    updateArea = this.actions$.ofType<fromAreaAction.UpdateArea>(fromAreaAction.UPDATE_AREA).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.areaService.updateArea(payload).pipe(
                map(message => new fromAreaAction.UpdateAreaSuccess(message)),
                catchError(error => of(new fromAreaAction.LoadAreaError(error)))
            )
        })
    )
    @Effect()
    deleteArea = this.actions$.ofType<fromAreaAction.DeleteArea>(fromAreaAction.DELETE_AREA).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.areaService.deleteArea(payload).pipe(
                map(message => new fromAreaAction.DeleteAreaSuccess(message)),
                catchError(error => of(new fromAreaAction.LoadAreaError(error)))
            )
        })
    )
    
}
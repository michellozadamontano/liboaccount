import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromActividadAction         from '../actions/actividades.action';
import * as fromServices                from '../../../services';

@Injectable()
export class ActividadEffects {
    constructor(
        private actions$: Actions,
        private actividadService: fromServices.ActividadesService
    ) {}

    @Effect()
    loadActividad$ = this.actions$.pipe(ofType(fromActividadAction.LOAD_ACTIVIDADES, 
        fromActividadAction.CREATE_ACTIVIDAD_SUCCESS),
        switchMap(() => 
        {
            return this.actividadService.getActividades().pipe(
                map(actividades => new fromActividadAction.LoadActividadesSuccess(actividades)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })   
    )
    @Effect()
    createActividad$ = this.actions$.pipe(ofType<fromActividadAction.CreateActividad>(fromActividadAction.CREATE_ACTIVIDAD),    
        map(action => action.payload),
        switchMap((payload) => 
        {
            return this.actividadService.createActividad(payload).pipe(
                map(message => new fromActividadAction.CreateActividadSucces(message)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })  
    )
    @Effect()
    loadActividadById$ = this.actions$.pipe(ofType<fromActividadAction.LoadActividadById>(fromActividadAction.LOAD_ACTIVIDAD_BY_ID),    
        map(action => action.payload),
        switchMap((payload) => 
        {
            return this.actividadService.getActividadById(payload).pipe(
                map(actividad => new fromActividadAction.LoadActividadByIdSuccess(actividad)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })  
    )
    @Effect()
    updateActividad$ = this.actions$.pipe(ofType<fromActividadAction.UpdateActividad>(fromActividadAction.UPDATE_ACTIVIDAD),    
        map(action => action.payload),
        switchMap((payload) => 
        {
            return this.actividadService.updateActividad(payload).pipe(
                map(message => new fromActividadAction.CreateActividadSucces(message)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })  
    )
    @Effect()
    deleteActividad$ = this.actions$.pipe(ofType<fromActividadAction.DeleteActividad>(fromActividadAction.DELETE_ACTIVIDAD),    
        map(action => action.payload),
        switchMap((payload) => 
        {
            return this.actividadService.deleteActividad(payload).pipe(
                map(message => new fromActividadAction.CreateActividadSucces(message)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })  
    )    
    
}
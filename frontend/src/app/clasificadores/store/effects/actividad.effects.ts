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
    loadActividad$ = this.actions$.ofType(fromActividadAction.LOAD_ACTIVIDADES).pipe(
        switchMap(() => 
        {
            return this.actividadService.getActividades().pipe(
                map(actividades => new fromActividadAction.LoadActividadesSuccess(actividades)),
                catchError(error => of(new fromActividadAction.LoadActividadesError(error)))
            )
        })   
    )

    
    
}
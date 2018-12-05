import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromPlantillaAction from '../actions/plantilla_comp.action';
import * as fromServices from '../../../services';

@Injectable()
export class PlantCompEffects {
    constructor(
        private actions$            : Actions,
        private plantillaService    : fromServices.PlantCompService
    ){}

    @Effect()
    loadPlantilla$ = this.actions$.ofType(fromPlantillaAction.LOAD_PLANTILLA)
    .pipe(
        switchMap(action =>            
            this.plantillaService.getPlantilla().pipe(
                map(resp => new fromPlantillaAction.LoadPlantillaSuccess(resp)),
                catchError(error => of(new fromPlantillaAction.LoadPlantillaError(error)))
            )

        )
    )   
}

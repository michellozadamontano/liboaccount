import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromProvinceAction from '../actions/provincia.action';
import * as fromServices from '../../services';

@Injectable()
export class ProvinceEffects {
    constructor(
        private actions$: Actions,
        private provinceService: fromServices.EntidadService
    ) {}

    @Effect()
    loadProvince$ = this.actions$.ofType(fromProvinceAction.LOAD_PROVINCE).pipe(
        switchMap(() => {
            return this.provinceService.GetProvince().pipe(
                map(province => new fromProvinceAction.LoadProvinceSuccess({provincia: province})),
                catchError(error => of(new fromProvinceAction.LoadProvinceError(error)))
            )
        })
    )
}
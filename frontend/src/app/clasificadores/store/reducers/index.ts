import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCuentaTipo  from './cuenta_tipo.reducers';



export interface ClasificadorState {
    cuenta_tipo: fromCuentaTipo.State
}

export const reducers: ActionReducerMap<ClasificadorState> = {
    cuenta_tipo : fromCuentaTipo.reducer,
}

export const getClasificadoresState = createFeatureSelector<ClasificadorState>('clasificadores');

// slice of Cuenta tipo
export const CuentaTipoState        = createSelector(getClasificadoresState,(state:ClasificadorState) => state.cuenta_tipo);
export const getCuentaTipos         = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipos);
export const getCuentaTipo          = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipo);
export const getCuentaTipoMessage   = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipoMessage);
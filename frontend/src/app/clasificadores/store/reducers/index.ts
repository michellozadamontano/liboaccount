import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCuentaTipo  from './cuenta_tipo.reducers';
import * as fromActividad   from './actividades.reducers';
import * as fromTcp         from './tcp.reducers';



export interface ClasificadorState {
    cuenta_tipo : fromCuentaTipo.State,
    actividad   : fromActividad.State,
    tcp         : fromTcp.State,
}

export const reducers: ActionReducerMap<ClasificadorState> = {
    cuenta_tipo : fromCuentaTipo.reducer,
    actividad   : fromActividad.reducer,
    tcp         : fromTcp.reducer
}

export const getClasificadoresState = createFeatureSelector<ClasificadorState>('clasificadores');

// slice of Cuenta tipo
export const CuentaTipoState        = createSelector(getClasificadoresState,(state:ClasificadorState) => state.cuenta_tipo);
export const getCuentaTipos         = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipos);
export const getCuentaTipo          = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipo);
export const getCuentaTipoMessage   = createSelector(CuentaTipoState, fromCuentaTipo.getCuentaTipoMessage);

// slice of Actividad
export const ActividadState         = createSelector(getClasificadoresState,(state:ClasificadorState) => state.actividad);
export const getActividadList       = createSelector(ActividadState, fromActividad.getActividadList);
export const getActividad           = createSelector(ActividadState, fromActividad.getActividad);
export const getActividaMessage     = createSelector(ActividadState, fromActividad.getActividaMessage);

// slice of Tcp
export const TcpState               = createSelector(getClasificadoresState,(state:ClasificadorState) => state.tcp);
export const getTcpShow             = createSelector(TcpState, fromTcp.getTcpShow);
export const getTcp                 = createSelector(TcpState, fromTcp.getTcp);
export const getTcpMessage          = createSelector(TcpState, fromTcp.getTcpMessage);
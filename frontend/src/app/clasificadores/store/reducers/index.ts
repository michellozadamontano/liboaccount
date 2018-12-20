import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCuentaTipo  from './cuenta_tipo.reducers';
import * as fromActividad   from './actividades.reducers';
import * as fromTcp         from './tcp.reducers';
import * as fromMayor       from './cuenta_mayor.reducers';

import * as fromCentroCosto from './centro_costo.reducer';


export interface ClasificadorState {
    cuenta_tipo : fromCuentaTipo.State,
    actividad   : fromActividad.State,
    tcp         : fromTcp.State,
    mayor       : fromMayor.State
    centro_costo: fromCentroCosto.State
}

export const reducers: ActionReducerMap<ClasificadorState> = {
    cuenta_tipo : fromCuentaTipo.reducer,
    actividad   : fromActividad.reducer,
    tcp         : fromTcp.reducer,
    mayor       : fromMayor.reducer,
    centro_costo: fromCentroCosto.reducer
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

//slice of cuenta mayor
export const MayorState             = createSelector(getClasificadoresState,(state:ClasificadorState) => state.mayor);
export const getMayorList           = createSelector(MayorState, fromMayor.getMayorList);
export const getMayor               = createSelector(MayorState, fromMayor.getMayor);
export const getMayorMessage        = createSelector(MayorState, fromMayor.getMayorMessage);
// slice of Centro Costo
export const CentroCostoState      = createSelector(getClasificadoresState,(state:ClasificadorState) => state.centro_costo);
export const getCentroCostoList    = createSelector(CentroCostoState, fromCentroCosto.getCentroCostos);
export const getCentroCosto        = createSelector(CentroCostoState, fromCentroCosto.getCentroCosto);
export const getCentroCostoMessage = createSelector(CentroCostoState, fromCentroCosto.getCentroCostosMessage);

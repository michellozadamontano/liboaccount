import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMoneda      from './moneda.reducers';
import * as fromTipoCuenta  from './tipo_cuenta.reducers'
import * as fromCuenta      from './cuenta.reducers';
import * as fromProvince    from './province.reducers';
import * as fromEntidad     from './entidad.reducers';
import * as fromCosto       from './ccosto.reducers';
import * as fromTasas       from './tasas.reducers';


export interface ClasificadorState {
    moneda      : fromMoneda.State,
    tipoCuenta  : fromTipoCuenta.State,
    cuenta      : fromCuenta.State,
    province    : fromProvince.State,
    entidad     : fromEntidad.State,
    costos      : fromCosto.State,
    tasas       : fromTasas.State,
}

export const reducers: ActionReducerMap<ClasificadorState> = {
    moneda      : fromMoneda.reducer,
    tipoCuenta  : fromTipoCuenta.reducer,
    cuenta      : fromCuenta.reducer,
    province    : fromProvince.reducer,
    entidad     : fromEntidad.reducer,
    costos      : fromCosto.reducer,
    tasas       : fromTasas.reducer,
}

export const getClasificadoresState = createFeatureSelector<ClasificadorState>('clasificadores');

// este es la propiedad moneda del state total
export const getMonedaState     = createSelector(getClasificadoresState, (state:ClasificadorState)=> state.moneda);
export const getMonedas         = createSelector(getMonedaState, fromMoneda.getMoneda);
export const getMonedaLoaded    = createSelector(getMonedaState,fromMoneda.getMonedaLoaded);
export const getMonedaLoading   = createSelector(getMonedaState, fromMoneda.getMonedaLoading);

// slice for tipoCuenta
export const getTipoCuentaState     = createSelector(getClasificadoresState,(state:ClasificadorState)=>state.tipoCuenta);
export const getTipoCuentas         = createSelector(getTipoCuentaState, fromTipoCuenta.getTipoCuenta);
export const getTipoCuentaLoaded    = createSelector(getTipoCuentaState, fromTipoCuenta.getTipoCuentaLoaded);
export const getTipoCuentaLoading   = createSelector(getTipoCuentaState, fromTipoCuenta.getTipoCuentaLoading);

//state of cuentas
export const CuentaState            = createSelector(getClasificadoresState,(state:ClasificadorState)=> state.cuenta);
export const getCuenta              = createSelector(CuentaState, fromCuenta.getCuenta);
export const getCuentaMessage       = createSelector(CuentaState,fromCuenta.getCuentaMessage);
export const getCuentaById          = createSelector(CuentaState,fromCuenta.getCuentaById);
export const getCuentaPrint         = createSelector(CuentaState,fromCuenta.getCuentaPrint);
export const getCuentaTitulo        = createSelector(CuentaState,fromCuenta.getCuentaTitulo);
export const getCuentaDepre         = createSelector(CuentaState,fromCuenta.getCuentaDepre);
export const getCuentaSobrante      = createSelector(CuentaState,fromCuenta.getCuentaSobrante);
export const getCuentaFaltante      = createSelector(CuentaState,fromCuenta.getCuentaFaltante);
export const getMyForm              = createSelector(CuentaState,fromCuenta.getMyForm);

// state of province
export const ProvinceState      = createSelector(getClasificadoresState,(state:ClasificadorState)=>state.province);
export const getProvinces       = createSelector(ProvinceState,fromProvince.getProvinces);
export const getProvinceMessage = createSelector(ProvinceState,fromProvince.getProvinceMessage);

//state of entidad
export const getEntidadState    = createSelector(getClasificadoresState,(state: ClasificadorState)=> state.entidad);
export const getEntidad         = createSelector(getEntidadState,fromEntidad.getEntidad);
export const geteEntidadMessage = createSelector(getEntidadState,fromEntidad.getEntidadMessage);
export const getEntidadLoaded   = createSelector(getEntidadState,fromEntidad.getEntidadLoaded);

//state of ccostos
export const getCostoState  = createSelector(getClasificadoresState,(state:ClasificadorState) => state.costos);
export const getCostos      = createSelector(getCostoState,fromCosto.getCostos);

//state of tasas
export const getTasaState        = createSelector(getClasificadoresState,(state:ClasificadorState)=>state.tasas);
export const getTasas            = createSelector(getTasaState,fromTasas.getTasas);
export const getTasa             = createSelector(getTasaState,fromTasas.getTasa);
export const getTasasMessage     = createSelector(getTasaState,fromTasas.getTasasMessage);
export const getTasasLoaded      = createSelector(getTasaState,fromTasas.getTasasLoaded);
export const getTasaCuentas      = createSelector(getTasaState,fromTasas.getTasaCuentas);

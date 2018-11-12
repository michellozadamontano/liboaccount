import { Action } from '@ngrx/store';
import { Moneda } from '../../models/moneda.interface';


// cargar moneda desde el rest api
export const CARGAR_MONEDA          = '[Moneda] Cargar moneda';
export const CARGAR_MONEDA_EXITO    = '[Moneda] Cargar moneda exito';
export const CARGAR_MONEDA_ERROR    = '[Moneda] Cargar moneda error';

export class CargaMoneda implements Action {
    readonly type = CARGAR_MONEDA;
}
export class CargaMonedaExito implements Action {
    readonly type = CARGAR_MONEDA_EXITO;
    constructor(public payload: Moneda[]){}
}
export class CargaMonedaError  implements Action {
    readonly type = CARGAR_MONEDA_ERROR;
    constructor( public payload: any){}
}

export type MonedaAction = CargaMoneda | CargaMonedaExito | CargaMonedaError;
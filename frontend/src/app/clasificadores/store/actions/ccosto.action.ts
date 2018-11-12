import { Action } from '@ngrx/store';
import { Ccosto } from '../../models/ccosto.interface';

// actions

export const INSERT_COSTO           = '[Costo] Insert costo';
export const LOAD_COSTO             = '[Costo] Load costo';
export const LOAD_COSTO_SUCCESS     = '[Costo] Load costo succcess';
export const LOAD_COSTO_ERROR       = '[Costo] Load costo error';

export class LoadCosto implements Action {
    readonly type = LOAD_COSTO;    
}
export class LoadCostoSucces implements Action {
    readonly type = LOAD_COSTO_SUCCESS;
    constructor(public payload: Ccosto[]){}
}
export class LoadCostoError implements Action {
    readonly type = LOAD_COSTO_ERROR;
    constructor( public payload: any){}
}

export class InsertCosto implements Action {
    readonly type = INSERT_COSTO;
    constructor(public payload: Ccosto){}
    
}

export type CostoAction = 
| InsertCosto
| LoadCosto
| LoadCostoSucces
| LoadCostoError ;
import { Action } from '@ngrx/store';
import { TipoCuenta } from '../../models/tipo_cuenta.interface';

// actions const
export const LOAD_TIPOCUENTA            = '[TipoCuenta] Load tipo cuenta';
export const LOAD_TIPOCUENTA_SUCCESS    = '[TipoCuenta] Load tipo cuenta success';
export const LOAD_TIPOCUENTA_ERROR      = '[TipoCuenta] Load tipo cuenta error'

export class LoadTipoCuenta implements Action {
    readonly type = LOAD_TIPOCUENTA;
}

export class LoadTipoCuentaSuccess implements Action {
    readonly type = LOAD_TIPOCUENTA_SUCCESS;
    constructor(public payload: TipoCuenta[]){}
}

export class LoadTipoCuentaError implements Action {
    readonly type = LOAD_TIPOCUENTA_ERROR;
    constructor(public payload: any){}
}

export type TipoCuentaAction = LoadTipoCuenta | LoadTipoCuentaSuccess | LoadTipoCuentaError;

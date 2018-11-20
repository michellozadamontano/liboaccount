import { Action }       from '@ngrx/store';
import { Tasas }        from '../../models/tasas.interface';
import { Tasa_Cuenta }  from '../../models/tasa_cuenta.interface';

// actions const
export const LOAD_TASAS                 = '[Tasas] Load tasas';
export const LOAD_TASAS_SUCCESS         = '[Tasas] Load tasas success';
export const LOAD_TASAS_ERROR           = '[Tasas] Load tasas error';
export const LOAD_TASA_CUENTA           = '[Tasas] Load tasa cuentas';
export const LOAD_TASA_CUENTA_SUCCESS   = '[Tasas] Load tasa cuentas success';
export const LOAD_TASA_BY_ID            = '[Tasas] Load tasa by id';
export const LOAD_TASA_BY_ID_SUCCESS    = '[Tasas] Load tasa by id success';
export const INSERT_TASA                = '[Tasas] Insert tasa';
export const INSERT_TASA_SUCCESS        = '[Tasas] Insert tasa success';
export const UPDATE_TASA                = '[Tasas] Update tasa';
export const UPDATE_TASA_SUCCESS        = '[Tasas] Update tasa success';
export const DELETE_TASA                = '[Tasas] Delete tasa';
export const DELETE_TASA_SUCCESS        = '[Tasas] Delete tasa success';

// classes
export class LoadTasas implements Action {
    readonly type = LOAD_TASAS;    
}
export class LoadTasasSucces implements Action {
    readonly type = LOAD_TASAS_SUCCESS;
    constructor(public payload:Tasas[]){}
}
export class LoadTassError implements Action {
    readonly type = LOAD_TASAS_ERROR;
    constructor(public payload: any){}
}
export class LoadTasaCuenta implements Action {
    readonly type = LOAD_TASA_CUENTA;
    constructor(public payload:{id:number}){}//mando las a buscar las cuentas segun el id de la depreciacion
}
export class LoadTasaCuentaSuccess implements Action {
    readonly type = LOAD_TASA_CUENTA_SUCCESS;
    constructor(public payload: Tasa_Cuenta[]){} // aqui obtengo las lista de cuentas despues para el id depreciacion
}
export class LoadTasaById implements Action {
    readonly type = LOAD_TASA_BY_ID;
    constructor(public payload: number){} // id tasa
}
export class LoadTasaByIdSuccess implements Action {
    readonly type = LOAD_TASA_BY_ID_SUCCESS;
    constructor(public payload: Tasas[]){}
}
export class InsertTasa implements Action {
    readonly type = INSERT_TASA;
    constructor(public payload:any){}
}
export class InsertTasaSuccess implements Action {
    readonly type = INSERT_TASA_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateTasa implements Action {
    readonly type = UPDATE_TASA;
    constructor(public payload:{id:number,tasa:any}){}
}
export class UpdateTasaSuccess implements Action {
    readonly type = UPDATE_TASA_SUCCESS;
    constructor(public payload: string){}
}
export class DeleteTasa implements Action {
    readonly type = DELETE_TASA;
    constructor(public payload: number){}
}
export class DeleteTasaSucces implements Action {
    readonly type = DELETE_TASA_SUCCESS;
    constructor(public payload: string){}
}


export type TasaAction = 
| LoadTasas
| LoadTasasSucces
| LoadTasaCuenta
| LoadTasaCuentaSuccess
| InsertTasa
| InsertTasaSuccess
| LoadTassError
| LoadTasaById
| LoadTasaByIdSuccess
| UpdateTasa
| UpdateTasaSuccess
| DeleteTasa
| DeleteTasaSucces
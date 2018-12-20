import { Action }       from '@ngrx/store';
import { CuentaMayor }  from '../../models/cuenta_mayor.interface';

export const LOAD_CUENTA_MAYOR                  = "[CUENTAMAYOR] LOAD_CUENTA_MAYOR";
export const LOAD_CUENTA_MAYOR_SUCCESS          = "[CUENTAMAYOR] LOAD_CUENTA_MAYOR SUCCESS";
export const LOAD_CUENTA_MAYOR_FAIL             = "[CUENTAMAYOR] LOAD_CUENTA_MAYOR FAIL";
export const LOAD_CUENTA_MAYOR_BY_ID            = '[CUENTAMAYOR] LOAD_CUENTA_MAYOR_BY_ID';
export const LOAD_CUENTA_MAYOR_BY_ID_SUCCESS    = '[CUENTAMAYOR] LOAD_CUENTA_MAYOR_BY_ID_SUCCESS';
export const CREATE_CUENTA_MAYOR                = '[CUENTAMAYOR] CREATE_CUENTA_MAYOR';
export const CUENTA_MAYOR_SUCCESS               = '[CUENTAMAYOR] CUENTA_MAYOR_SUCCESS';
export const UPDATE_CUENTA_MAYOR                = '[CUENTAMAYOR] UPDATE_CUENTA_MAYOR';
export const DELETE_CUENTA_MAYOR                = '[CUENTAMAYOR] DELETE_CUENTA_MAYOR';

export class LoadCuentaMayor implements Action {
    readonly type = LOAD_CUENTA_MAYOR;
    constructor() { }
}

export class LoadCuentaMayorSuccess implements Action {
    readonly type = LOAD_CUENTA_MAYOR_SUCCESS;
    constructor(public payload: CuentaMayor[]) { }
}

export class LoadCuentaMayorFail implements Action {
    readonly type = LOAD_CUENTA_MAYOR_FAIL;
    constructor(public payload: any) { }
}
export class LoadCuentaMayorById implements Action {
    readonly type = LOAD_CUENTA_MAYOR_BY_ID;
    constructor(public payload: number){}
}
export class LoadCuentaMayorByIdSuccess implements Action {
    readonly type = LOAD_CUENTA_MAYOR_BY_ID_SUCCESS;
    constructor(public payload: CuentaMayor){}
}
export class CreateCuentaMayor implements Action {
    readonly type = CREATE_CUENTA_MAYOR;
    constructor(public payload: CuentaMayor){}
}
export class CuentaMayorSuccess implements Action {
    readonly type = CUENTA_MAYOR_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateCuentaMayor implements Action {
    readonly type = UPDATE_CUENTA_MAYOR;
    constructor(public payload: CuentaMayor){}
}
export class DeleteCuentaMayor implements Action {
    readonly type = DELETE_CUENTA_MAYOR;
    constructor(public payload: number){}
}

export type Actions = 
| LoadCuentaMayor 
| LoadCuentaMayorSuccess 
| LoadCuentaMayorFail
| LoadCuentaMayorById
| LoadCuentaMayorByIdSuccess
| CreateCuentaMayor
| CuentaMayorSuccess
| UpdateCuentaMayor
| DeleteCuentaMayor
import { Action }       from '@ngrx/store';
import { CuentaTipo }   from '../../models/cuenta_tipo.interface';


export const LOAD_CUENTA_TIPO                   = '[CuentaTipo] Load cuenta tipo';
export const LOAD_CUENTA_TIPO_SUCCESS           = '[CuentaTipo] Load cuenta tipo success';
export const LOAD_CUENTA_TIPO_ERROR             = '[CuentaTipo] Load cuenta tipo error';
export const LOAD_CUENTA_TIPO_BY_ID             = '[CuentaTipo] Load cuenta tipo by id';
export const LOAD_CUENTA_TIPO_BY_ID_SUCCESS     = '[CuentaTipo] Load cuenta tipo by id success';
export const CREATE_CUENTA_TIPO                 = '[CuentaTipo] Create cuenta tipo';
export const CREATE_CUENTA_TIPO_SUCCESS         = '[CuentaTipo] Create cuenta tipo success';
export const UPDATE_CUENTA_TIPO                 = '[CuentaTipo] Update cuenta tipo';
export const DELETE_CUENTA_TIPO                 = '[CuentaTipo] Delete cuenta tipo';
 


export class LoadCuentaTipo implements Action {
    readonly type = LOAD_CUENTA_TIPO;
}
export class LoadCuentaTipoSuccess implements Action {
    readonly type = LOAD_CUENTA_TIPO_SUCCESS;
    constructor(public payload: CuentaTipo[]){}
}
export class LoadCuentaTipoById implements Action {
    readonly type = LOAD_CUENTA_TIPO_BY_ID;
    constructor(public payload:number){}
}
export class LoadCuentaTipoByIdSuccess implements Action {
    readonly type = LOAD_CUENTA_TIPO_BY_ID_SUCCESS;
    constructor(public payload:CuentaTipo){}
}
export class LoadCuentaTipoError implements Action {
    readonly type = LOAD_CUENTA_TIPO_ERROR;
    constructor(public payload: any){}
}
export class CreateCuentaTipo implements Action {
    readonly type = CREATE_CUENTA_TIPO;
    constructor(public payload: CuentaTipo){}
}
export class CreateCuentaTipoSuccess implements Action {
    readonly type = CREATE_CUENTA_TIPO_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateCuentaTipo implements Action {
    readonly type = UPDATE_CUENTA_TIPO;
    constructor(public payload: CuentaTipo){}
}
export class DeleteCuentaTipo implements Action {
    readonly type = DELETE_CUENTA_TIPO;
    constructor(public payload: number){}
}

export type CuentaTipoAction = 
| LoadCuentaTipo
| LoadCuentaTipoSuccess
| LoadCuentaTipoById
| LoadCuentaTipoByIdSuccess
| LoadCuentaTipoError
| CreateCuentaTipo
| CreateCuentaTipoSuccess
| UpdateCuentaTipo
| DeleteCuentaTipo
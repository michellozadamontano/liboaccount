import { Action }       from '@ngrx/store';
import { CuentaTipo }   from '../../models/cuenta_tipo.interface';


export const LOAD_CUENTA_TIPO                   = '[CuentaTipo] LOAD_CUENTA_TIPO';
export const LOAD_CUENTA_TIPO_SUCCESS           = '[CuentaTipo] LOAD_CUENTA_TIPO_SUCCESS';
export const LOAD_CUENTA_TIPO_ERROR             = '[CuentaTipo] LOAD_CUENTA_TIPO_ERROR';
export const LOAD_CUENTA_TIPO_BY_ID             = '[CuentaTipo] LOAD_CUENTA_TIPO_BY_ID';
export const LOAD_CUENTA_TIPO_BY_ID_SUCCESS     = '[CuentaTipo] LOAD_CUENTA_TIPO_BY_ID_SUCCESS';
export const CREATE_CUENTA_TIPO                 = '[CuentaTipo] CREATE_CUENTA_TIPO';
export const CREATE_CUENTA_TIPO_SUCCESS         = '[CuentaTipo] CREATE_CUENTA_TIPO_SUCCESS';
export const UPDATE_CUENTA_TIPO                 = '[CuentaTipo] UPDATE_CUENTA_TIPO';
export const DELETE_CUENTA_TIPO                 = '[CuentaTipo] DELETE_CUENTA_TIPO';
export const GET_CUENTA_TIPO_BY_GRUPO           = '[CuentaTipo] GET_CUENTA_TIPO_BY_GRUPO';
 


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
export class GetCuentaTipoByGrupo implements Action {
    readonly type = GET_CUENTA_TIPO_BY_GRUPO;
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
| GetCuentaTipoByGrupo
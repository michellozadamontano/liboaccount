import { Action } from '@ngrx/store';
import { Entidad } from '../../models/entidad.interface';

// actions
export const LOAD_ENTIDAD           = '[Entidad] Load entidad';
export const LOAD_ENTIDAD_SUCCESS   = '[Entidad] Load entidad success';
export const LOAD_ENTIDAD_ERROR     = '[Entidad] Load entidad error';
export const CREATE_ENTIDAD         = '[Entidad] Create entidad';
export const UPDATE_ENTIDAD         = '[Entidad] Update entidad';


export class LoadEntidad implements Action {
    readonly type = LOAD_ENTIDAD;
}
export class LoadEntidadSuccess implements Action{
    readonly type = LOAD_ENTIDAD_SUCCESS;
    constructor(public payload:Entidad){}
}
export class LoadEntidadError implements Action{
    readonly type = LOAD_ENTIDAD_ERROR;
    constructor(public payload: any){}
}
export class CreateEntidad implements Action {
    readonly type = CREATE_ENTIDAD;
    constructor(public payload: Entidad){}
}
export class UpdateEntidad implements Action {
    readonly type = UPDATE_ENTIDAD;
    constructor(public payload: Entidad){}
}

export type EntidadAction = 
| LoadEntidad 
| LoadEntidadSuccess 
| LoadEntidadError 
| CreateEntidad
| UpdateEntidad
import { Action }       from '@ngrx/store';
import { Actividades }  from '../../models/actividades.interface';

//constantes
export const LOAD_ACTIVIDADES               = '[Actividades] Load actividad';
export const LOAD_ACTIVIDADES_SUCCESS       = '[Actividades] Load actividad succes';
export const LOAD_ACTIVIDADES_ERROR         = '[Actividades] Load actividad error';
export const LOAD_ACTIVIDAD_BY_ID           = '[Actividades] Load actividad by id';
export const LOAD_ACTIVIDAD_BY_ID_SUCCESS   = '[Actividades] Load actividad by id success';
export const CREATE_ACTIVIDAD               = '[Actividades] Create actividad ';
export const CREATE_ACTIVIDAD_SUCCESS       = '[Actividades] Create actividad Success ';
export const UPDATE_ACTIVIDAD               = '[Actividades] Update actividad '; 
export const DELETE_ACTIVIDAD               = '[Actividades] Delete actividad ';

export class LoadActividades implements Action {
    readonly type = LOAD_ACTIVIDADES;
}
export class LoadActividadesSuccess implements Action {
    readonly type = LOAD_ACTIVIDADES_SUCCESS;
    constructor(public payload: Actividades[]){}
}
export class LoadActividadesError implements Action {
    readonly type = LOAD_ACTIVIDADES_ERROR;
    constructor(public payload: any){}
}
export class LoadActividadById implements Action {
    readonly type = LOAD_ACTIVIDAD_BY_ID;
    constructor(public payload: number){}
}
export class LoadActividadByIdSuccess implements Action {
    readonly type = LOAD_ACTIVIDAD_BY_ID_SUCCESS;
    constructor(public payload: Actividades){}
}
export class CreateActividad implements Action {
    readonly type = CREATE_ACTIVIDAD;
    constructor(public payload: Actividades){}
}
export class CreateActividadSucces implements Action {
    readonly type = CREATE_ACTIVIDAD_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateActividad implements Action {
    readonly type = UPDATE_ACTIVIDAD;
    constructor(public payload: Actividades){}
}
export class DeleteActividad implements Action {
    readonly type = DELETE_ACTIVIDAD;
    constructor(public payload: number){}
}

export type ActividadAction = 
| LoadActividades
| LoadActividadesSuccess
| LoadActividadesError
| LoadActividadById
| LoadActividadByIdSuccess
| CreateActividad
| CreateActividadSucces
| UpdateActividad
| DeleteActividad

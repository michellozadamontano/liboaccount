import { Action }       from '@ngrx/store';
import { Actividades } from '../../models/actividades.interface';

//constantes
export const LOAD_ACTIVIDADES               = '[Actividades] Load actividad';
export const LOAD_ACTIVIDADES_SUCCESS       = '[Actividades] Load actividad succes';
export const LOAD_ACTIVIDADES_ERROR         = '[Actividades] Load actividad error';

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

export type ActividadAction = 
| LoadActividades
| LoadActividadesSuccess
| LoadActividadesError

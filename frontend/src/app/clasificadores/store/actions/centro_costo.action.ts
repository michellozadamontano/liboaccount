import { Action }       from '@ngrx/store';
import { CentroCosto }  from '../../models/centro_costo.interface';

//constantes
export const LOAD_CENTRO_COSTO                 = '[CentroCosto] Load centro costo';
export const LOAD_CENTRO_COSTO_SUCCESS         = '[CentroCosto] Load centro costo succes';
export const LOAD_CENTRO_COSTO_ERROR           = '[CentroCosto] Load centro costo error';
export const LOAD_CENTRO_COSTO_BY_ID           = '[CentroCosto] Load centro costo by id';
export const LOAD_CENTRO_COSTO_BY_ID_SUCCESS   = '[CentroCosto] Load centro costo by id success';
export const CREATE_CENTRO_COSTO               = '[CentroCosto] Create centro costo ';
export const CREATE_CENTRO_COSTO_SUCCESS       = '[CentroCosto] Create centro costo Success ';
export const UPDATE_CENTRO_COSTO               = '[CentroCosto] Update centro costo '; 
export const DELETE_CENTRO_COSTO               = '[CentroCosto] Delete centro costo ';

export class LoadCentroCosto implements Action {
    readonly type = LOAD_CENTRO_COSTO;
}
export class LoadCentroCostoSuccess implements Action {
    readonly type = LOAD_CENTRO_COSTO_SUCCESS;
    constructor(public payload: CentroCosto[]){}
}
export class LoadCentroCostoError implements Action {
    readonly type = LOAD_CENTRO_COSTO_ERROR;
    constructor(public payload: any){}
}
export class LoadCentroCostoById implements Action {
    readonly type = LOAD_CENTRO_COSTO_BY_ID;
    constructor(public payload: number){}
}
export class LoadCentroCostoByIdSuccess implements Action {
    readonly type = LOAD_CENTRO_COSTO_BY_ID_SUCCESS;
    constructor(public payload: CentroCosto){}
}
export class CreateCentroCosto implements Action {
    readonly type = CREATE_CENTRO_COSTO;
    constructor(public payload: CentroCosto){}
}
export class CreateCentroCostoSucces implements Action {
    readonly type = CREATE_CENTRO_COSTO_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateCentroCosto implements Action {
    readonly type = UPDATE_CENTRO_COSTO;
    constructor(public payload: CentroCosto){}
}
export class DeleteCentroCosto implements Action {
    readonly type = DELETE_CENTRO_COSTO;
    constructor(public payload: number){}
}

export type CentroCostoAction = 
| LoadCentroCosto
| LoadCentroCostoSuccess
| LoadCentroCostoError
| LoadCentroCostoById
| LoadCentroCostoByIdSuccess
| CreateCentroCosto
| CreateCentroCostoSucces
| UpdateCentroCosto
| DeleteCentroCosto

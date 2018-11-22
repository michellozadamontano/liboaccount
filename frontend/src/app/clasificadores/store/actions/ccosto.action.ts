import { Action }       from '@ngrx/store';
import { Ccosto }       from '../../models/ccosto.interface';
import { CcostoList }   from '../../models/ccosto_list.interface';


// actions

export const INSERT_COSTO               = '[Costo] Insert costo';
export const INSERT_COSTO_SUCCESS       = '[Costo] Insert costo success';
export const LOAD_COSTO                 = '[Costo] Load costo';
export const LOAD_COSTO_SUCCESS         = '[Costo] Load costo succcess';
export const LOAD_COSTO_ERROR           = '[Costo] Load costo error';
export const LOAD_COSTO_BY_ID           = '[Costo] Load costo by id';
export const LOAD_COSTO_BY_ID_SUCCESS   = '[Costo] Load costo by id success';
export const UPDATE_COSTO               = '[Costo] Update costo';
export const UPDATE_COSTO_SUCCESS       = '[Costo] Update costo success';
export const DELETE_COSTO               = '[Costo] Delete costo';
export const DELETE_COSTO_SUCCESS       = '[Costo] Delete costo success';

export class LoadCosto implements Action {
    readonly type = LOAD_COSTO;    
}
export class LoadCostoSucces implements Action {
    readonly type = LOAD_COSTO_SUCCESS;
    constructor(public payload: CcostoList[]){}
}
export class LoadCostoError implements Action {
    readonly type = LOAD_COSTO_ERROR;
    constructor( public payload: any){}
}
export class LoadCostoById implements Action {
    readonly type = LOAD_COSTO_BY_ID;
    constructor(public payload:number){}
}
export class LoadCostoByIdSuccess implements Action {
    readonly type = LOAD_COSTO_BY_ID_SUCCESS;
    constructor(public payload:Ccosto){}
}

export class InsertCosto implements Action {
    readonly type = INSERT_COSTO;
    constructor(public payload: Ccosto){}    
}
export class InsertCostoSuccess  implements Action {
    readonly type = INSERT_COSTO_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateCosto implements Action {
    readonly type = UPDATE_COSTO;
    constructor(public payload: {id:number, ccosto:Ccosto}){} 
}
export class UpdateCostoSuscces implements Action {
    readonly type = UPDATE_COSTO_SUCCESS;
    constructor(public payload: string){} 
}
export class DeleteCosto implements Action {
    readonly type = DELETE_COSTO;
    constructor(public payload: number){}
}
export class DeleteCostoSuccess implements Action {
    readonly type = DELETE_COSTO_SUCCESS;
    constructor(public payload: string){}
}


export type CostoAction = 
| InsertCosto
| InsertCostoSuccess
| LoadCosto
| LoadCostoSucces
| LoadCostoError
| LoadCostoById
| LoadCostoByIdSuccess
| UpdateCosto
| UpdateCostoSuscces
| DeleteCosto
| DeleteCostoSuccess
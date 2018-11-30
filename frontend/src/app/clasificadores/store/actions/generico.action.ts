import { Action }       from '@ngrx/store';
import { GenericoList } from '../../models/generico_list.interface';
import { Generico } from '../../models/generico.interface';


// actions
export const LOAD_GENERICO              = '[Generico] Load Generico';
export const LOAD_GENERICO_SUCCESS      = '[Generico] Load Generico Success';
export const LOAD_GENERICO_ERROR        = '[Generico] Load Generico Error';
export const CREATE_GENERICO            = '[Generico] Create Generico';
export const CREATE_GENERICO_SUCCESS    = '[Generico] Create Generico Success';
export const UPDATE_GENERICO            = '[Generico] Update Generico';
export const UPDATE_GENERICO_SUCCESS    = '[Generico] Update Generico Success';
export const DELETE_GENERICO            = '[Generico] Delete Generico';
export const DELETE_GENERICO_SUCCESS    = '[Generico] Delete Generico Success';
export const GENERICO_BY_ID             = '[Generico] Generico by id';
export const GENERICO_BY_ID_SUCCESS     = '[Generico] Generico by id Success';

export class LoadGenerico implements Action {
    readonly type = LOAD_GENERICO;    
}
export class LoadGenericoSuccess implements Action {
    readonly type = LOAD_GENERICO_SUCCESS;
    constructor(public payload: GenericoList[]){}    
}
export class LoadGenericoError implements Action {
    readonly type = LOAD_GENERICO_ERROR;
    constructor(public payload:string){}
}
export class GenericoById implements Action {
    readonly type = GENERICO_BY_ID;
    constructor(public payload: number){}
}
export class GenericoByIdSuccess implements Action {
    readonly type = GENERICO_BY_ID_SUCCESS;
    constructor(public payload: Generico){}
}
export class CreateGenerico implements Action {
    readonly type = CREATE_GENERICO;
    constructor(public payload: Generico){}
}
export class CreateGenericoSucces implements Action {
    readonly type = CREATE_GENERICO_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateGenerico implements Action {
    readonly type = UPDATE_GENERICO;
    constructor(public payload: Generico){}
}
export class UpdateGenericoSuccess implements Action {
    readonly type = UPDATE_GENERICO_SUCCESS;
    constructor(public payload: string){}
}
export class DeleteGenerico implements Action {
    readonly type = DELETE_GENERICO;
    constructor(public payload: number){}
}
export class DeleteGenericoSuccess implements Action {
    readonly type = DELETE_GENERICO_SUCCESS;
    constructor(public payload: string){}
}

export type GenericoAction = 
| LoadGenerico
| LoadGenericoSuccess
| LoadGenericoError
| GenericoById
| GenericoByIdSuccess
| CreateGenerico
| CreateGenericoSucces
| UpdateGenerico
| UpdateGenericoSuccess
| DeleteGenerico
| DeleteGenericoSuccess
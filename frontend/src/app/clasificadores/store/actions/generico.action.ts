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
    constructor(public payload: {id:number, generico: Generico}){}
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
| CreateGenerico
| CreateGenericoSucces
| UpdateGenerico
| UpdateGenericoSuccess
| DeleteGenerico
| DeleteGenericoSuccess
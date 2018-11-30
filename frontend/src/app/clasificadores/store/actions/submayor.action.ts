import { Action }       from '@ngrx/store';
import { Submayor }     from '../../models/submayor.interface';


// Constantes
export const LOAD_SUBMAYOR                  = '[Submayor] Load Submayor';
export const LOAD_SUBMAYOR_SUCCESS          = '[Submayor] Load Submayor Success';
export const CREATE_SUBMAYOR                = '[Submayor] Create Submayor';
export const CREATE_SUBMAYOR_SUCCESS        = '[Submayor] Create Submayor Success';
export const LOAD_SUBMAYOR_ERROR            = '[Submayor] Load Submayor Error';
export const UPDATE_SUBMAYOR                = '[Submayor] Update Submayor';
export const UPDATE_SUBMAYOR_SUCCESS        = '[Submayor] Update Submayor Success';
export const DELETE_SUBMAYOR                = '[Submayor] Delete Submayor';
export const LOAD_SUBMAYOR_BY_ID            = '[Submayor] Load Submayor by id';
export const LOAD_SUBMAYOR_BY_ID_SUCCESS    = '[Submayor] Load Submayor by id success';

export class LoadSubmayor implements Action {
    readonly type = LOAD_SUBMAYOR;
    constructor(public payload:number){} // cargo los submayores segun su numero de generico
}
export class LoadSubmayorSuccess implements Action {
    readonly type = LOAD_SUBMAYOR_SUCCESS;
    constructor(public payload: Submayor[]){} 
}
export class LoadSubmayorById implements Action {
    readonly type = LOAD_SUBMAYOR_BY_ID;
    constructor(public payload: number){} 
}
export class LoadSubmayorByIdSuccess implements Action {
    readonly type = LOAD_SUBMAYOR_BY_ID_SUCCESS;
    constructor(public payload: Submayor){}
}

export class CreateSubmayor implements Action {
    readonly type = CREATE_SUBMAYOR;
    constructor(public payload: Submayor){}
}
export class CreateSubmayorSuccess implements Action {
    readonly type = CREATE_SUBMAYOR_SUCCESS;
    constructor(public payload: string){}
}
export class LoadSubmayorError implements Action {
    readonly type = LOAD_SUBMAYOR_ERROR;
    constructor(public payload: any){}
}
export class UpdateSubmayor implements Action {
    readonly type = UPDATE_SUBMAYOR;
    constructor(public payload:Submayor){}
}
export class UpdateSubmayorSuccess implements Action {
    readonly type = UPDATE_SUBMAYOR_SUCCESS;
    constructor(public payload:string){}
}
export class DeleteSubmayor implements Action {
    readonly type = DELETE_SUBMAYOR;
    constructor(public payload:Submayor){}
}

export type SubmayorAction =
| LoadSubmayor
| LoadSubmayorSuccess
| CreateSubmayor
| CreateSubmayorSuccess
| LoadSubmayorError
| UpdateSubmayor
| UpdateSubmayorSuccess
| DeleteSubmayor
| LoadSubmayorById
| LoadSubmayorByIdSuccess

import { Action }       from '@ngrx/store';
import { SubArea } from '../../models/subarea.interface';


// Constantes
export const LOAD_SUB_AREAS                 = '[Subareas] Load Subareas';
export const LOAD_SUB_AREAS_SUCCESS         = '[Subareas] Load Subareas Success';
export const LOAD_SUB_AREAS_ERROR           = '[Subareas] Load Subareas Error';
export const LOAD_SUB_AREAS_BY_ID           = '[Subareas] Load Subareas By Id';
export const LOAD_SUB_AREAS_BY_ID_SUCCESS   = '[Subareas] Load Subareas By Id Success';
export const CREATE_SUB_AREA                = '[Subareas] Crear Subareas';
export const CREATE_SUB_AREA_SUCCESS        = '[Subareas] Crear Subareas Success';
export const UPDATE_SUB_AREA                = '[Subareas] Update Subareas';
export const UPDATE_SUB_AREA_SUCCESS        = '[Subareas] Update Subareas Success';
export const DELETE_SUB_AREA                = '[Subareas] Delete Subareas';
export const DELETE_SUB_AREA_SUCCESS        = '[Subareas] Delete Subareas Success';


//clases
export class LoadSubArea implements Action {
    readonly type = LOAD_SUB_AREAS;
    constructor(public payload:number){}//aqui paso el id del area para poder mostrar las subareas
}
export class LoadSubAreaSuccess implements Action {
    readonly type = LOAD_SUB_AREAS_SUCCESS;
    constructor(public payload: SubArea[]){}
}
export class LoadSubAreaError implements Action {
    readonly type = LOAD_SUB_AREAS_ERROR;
    constructor(public payload:any){}
}
export class LoadSubAreaById implements Action {
    readonly type = LOAD_SUB_AREAS_BY_ID;
    constructor(public payload: number){}
}
export class LoadSubAreaByIdSuccess implements Action {
    readonly type = LOAD_SUB_AREAS_BY_ID_SUCCESS;
    constructor(public payload: SubArea){}
}
export class CreateSubArea implements Action {
    readonly type = CREATE_SUB_AREA;
    constructor(public payload: SubArea){}
}
export class CreateSubAreaSuccess implements Action {
    readonly type = CREATE_SUB_AREA_SUCCESS;
    constructor(public payload: string){}
}
export class UpdateSubArea implements Action {
    readonly type = UPDATE_SUB_AREA;
    constructor(public payload: SubArea){}
}
export class UpdateSubAreaSuccess implements Action {
    readonly type = UPDATE_SUB_AREA_SUCCESS;
    constructor(public payload: string){}
}
export class DeleteSubArea implements Action {
    readonly type = DELETE_SUB_AREA;
    constructor(public payload: SubArea){}
}
export class DeleteSubAreaSuccess implements Action {
    readonly type = DELETE_SUB_AREA_SUCCESS;
    constructor(public payload: string){}
}

export type SubAreaAction = 
| LoadSubArea
| LoadSubAreaSuccess
| LoadSubAreaError
| LoadSubAreaById
| LoadSubAreaByIdSuccess
| CreateSubArea
| CreateSubAreaSuccess
| UpdateSubArea
| UpdateSubAreaSuccess
| DeleteSubArea
| DeleteSubAreaSuccess
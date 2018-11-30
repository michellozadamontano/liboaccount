import { Action }       from '@ngrx/store';
import { AreaList } from '../../models/area_list.interface';
import { Area } from '../../models/area.interface';


// constantes
export const LOAD_AREA                      = '[Area] Load Area';
export const LOAD_AREA_SUCCESS              = '[Area] Load Area Success';
export const LOAD_AREA_ERROR                = '[Area] Load Area Error';
export const LOAD_AREA_BY_ID                = '[Area] Load Area By Id';
export const LOAD_AREA_BY_ID_SUCCESS        = '[Area] Load Area By Id Success';
export const CREATE_AREA                    = '[Area] Create Area';
export const CREATE_AREA_SUCCES             = '[Area] Create Area Success';
export const UPDATE_AREA                    = '[Area] Update Area';
export const UPDATE_AREA_SUCCESS            = '[Area] Update Area Success';
export const DELETE_AREA                    = '[Area] Delete Area';
export const DELETE_AREA_SUCCESS            = '[Area] Delete Area Success';

export class LoadArea implements Action {
    readonly type = LOAD_AREA;
}
export class LoadAreaSuccess implements Action {
    readonly type = LOAD_AREA_SUCCESS;    
    constructor(public payload: AreaList[]) {}
}
export class LoadAreaById implements Action {
    readonly type = LOAD_AREA_BY_ID;
    constructor(public payload: number){}
}
export class LoadAreaByIdSuccess implements Action {
    readonly type = LOAD_AREA_BY_ID_SUCCESS;
    constructor(public payload: Area){}
}
export class LoadAreaError implements Action {
    readonly type = LOAD_AREA_ERROR;
    constructor(public payload: any){}
}
export class CreateArea implements Action {
    readonly type = CREATE_AREA;
    constructor(public payload: Area){}
}
export class CreateAreaSucces implements Action {
    readonly type = CREATE_AREA_SUCCES;
    constructor(public payload: string){}
}
export class UpdateArea implements Action {
    readonly type = UPDATE_AREA;
    constructor(public payload: Area){}
}
export class UpdateAreaSuccess implements Action {
    readonly type = UPDATE_AREA_SUCCESS;
    constructor(public payload: string){}
}
export class DeleteArea implements Action {
    readonly type = DELETE_AREA;
    constructor(public payload: number){}
}
export class DeleteAreaSuccess implements Action {
    readonly type = DELETE_AREA_SUCCESS;
    constructor(public payload: string){}
}

export type AreaAction = 
| LoadArea
| LoadAreaSuccess
| LoadAreaById
| LoadAreaByIdSuccess
| LoadAreaError
| CreateArea
| CreateAreaSucces
| UpdateArea
| UpdateAreaSuccess
| DeleteArea
| DeleteAreaSuccess

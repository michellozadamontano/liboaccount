import { Action }       from '@ngrx/store';
import { PlantillaComp } from '../../models/plantilla_comp.interface';


export const LOAD_PLANTILLA         = '[Plantilla] Load Plantilla';
export const LOAD_PLANTILLA_SUCCESS = '[Plantilla] Load Plantilla Success';
export const LOAD_PLANTILLA_ERROR   = '[Plantilla] Load Plantilla Error';

export class LoadPlantilla implements Action {
    readonly type = LOAD_PLANTILLA;    
}
export class LoadPlantillaSuccess implements Action {
    readonly type = LOAD_PLANTILLA_SUCCESS;
    constructor(public payload: PlantillaComp[]){}
}
export class LoadPlantillaError implements Action {
    readonly type = LOAD_PLANTILLA_ERROR;
    constructor(public payload: any){}
}

export type PlantillaAction = 
| LoadPlantilla
| LoadPlantillaSuccess
| LoadPlantillaError

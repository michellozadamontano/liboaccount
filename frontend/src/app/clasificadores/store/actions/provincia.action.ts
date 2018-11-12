import { Action }   from '@ngrx/store';
import { Provincia} from '../../models/provincia.interface';


export const LOAD_PROVINCE          = '[Province] Load province';
export const LOAD_PROVINCE_SUCCESS  = '[Province] Load rovince success';
export const LOAD_PROVINCE_ERROR    = '[Province] Load province error';


export class LoadProvince implements Action
{
    readonly type = LOAD_PROVINCE;
}
export class LoadProvinceSuccess implements Action
{
    readonly type = LOAD_PROVINCE_SUCCESS;
    constructor(public payload:{provincia: Provincia[]} ){}
}
export class LoadProvinceError implements Action
{
    readonly type = LOAD_PROVINCE_ERROR;
    constructor(public payload: any){}
}

export type ProvinceAction = LoadProvince | LoadProvinceSuccess | LoadProvinceError;
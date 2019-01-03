import { Action }           from '@ngrx/store';
import { CuentaPlanList }   from '../../models/cuenta_plan_list.interface';
import { CuentaPlan }       from '../../models/cuenta_plan.interface';

export const LOAD_CUENTA_PLAN                   = "[CUENTAPLAN] LOAD_CUENTA_PLAN"
export const LOAD_CUENTA_PLAN_SUCCESS           = "[CUENTAPLAN] LOAD_CUENTA_PLAN SUCCESS"
export const LOAD_CUENTA_PLAN_FAIL              = "[CUENTAPLAN] LOAD_CUENTA_PLAN FAIL"
export const LOAD_CUENTA_PLAN_BY_ID             = "[CUENTAPLAN] LOAD_CUENTA_PLAN BY ID"
export const LOAD_CUENTA_PLAN_BY_ID_SUCCESS     = "[CUENTAPLAN] LOAD_CUENTA_PLAN BY ID SUCCESS"
export const CUENTA_PLAN_SUCCESS                = "[CUENTAPLAN] CUENTA_PLAN_SUCCESS"
export const CREATE_CUENTA_PLAN                 = "[CUENTAPLAN] CREATE CUENTA PLAN"
export const UPDATE_CUENTA_PLAN                 = "[CUENTAPLAN] UPDATE CUENTA PLAN"
export const DELETE_CUENTA_PLAN                 = "[CUENTAPLAN] DELETE CUENTA PLAN"
export const GET_CUENTA_PLAN_BY_TIPO            = "[CUENTAPLAN] GET_CUENTA_PLAN_BY_TIPO"
export const GET_CUENTA_PLAN_BY_TIPO_SUCCESS    = "[CUENTAPLAN] GET_CUENTA_PLAN_BY_TIPO_SUCCESS"

export class LoadCuentaPlan implements Action {
    readonly type = LOAD_CUENTA_PLAN;
    constructor() { }
}

export class LoadCuentaPlanSuccess implements Action {
    readonly type = LOAD_CUENTA_PLAN_SUCCESS;
    constructor(public payload: CuentaPlanList[]) { }
}

export class LoadCuentaPlanFail implements Action {
    readonly type = LOAD_CUENTA_PLAN_FAIL;
    constructor(public payload: any) { }
}

export class LoadCuentaPlanById implements Action {
    readonly type = LOAD_CUENTA_PLAN_BY_ID;
    constructor(public payload: number) { }
}
export class LoadCuentaPlanByIdSuccess implements Action {
    readonly type = LOAD_CUENTA_PLAN_BY_ID_SUCCESS;
    constructor(public payload: CuentaPlan) { }
}

export class CuentaPlanSuccess implements Action {
    readonly type = CUENTA_PLAN_SUCCESS;
    constructor(public payload:any) { }
}


export class CreateCuentaPlan implements Action {
    readonly type = CREATE_CUENTA_PLAN;
    constructor(public payload: CuentaPlan) { }
}

export class UpdateCuentaPlan implements Action {
    readonly type = UPDATE_CUENTA_PLAN;
    constructor(public payload: CuentaPlan) { }
}

export class DeleteCuentaPlan implements Action {
    readonly type = DELETE_CUENTA_PLAN;
    constructor(public payload: number) { }
}

export class GetCuentaByTipo implements Action {
    readonly type = GET_CUENTA_PLAN_BY_TIPO;
    constructor(public payload: number){}
}
export class GetCuentaByTipoSuccess implements Action {
    readonly type = GET_CUENTA_PLAN_BY_TIPO_SUCCESS;
    constructor(public payload: CuentaPlan[]){}
}


export type CuentaPlanActions = 
| LoadCuentaPlan 
| LoadCuentaPlanSuccess 
| LoadCuentaPlanFail
| LoadCuentaPlanById
| LoadCuentaPlanByIdSuccess
| CuentaPlanSuccess
| CreateCuentaPlan
| UpdateCuentaPlan
| DeleteCuentaPlan
| GetCuentaByTipo
| GetCuentaByTipoSuccess
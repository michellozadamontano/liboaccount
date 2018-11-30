import { Action } from '@ngrx/store';
import { CuentaList } from '../../models/cuenta_list.interface';
import { CuentaPrint } from '../../models/cuenta_print.interface';
import { Cuenta } from '../../models/cuenta.interface';

// actions

export const INSERT_CUENTA                      = '[Cuenta] Insert cuenta';
export const INSERT_CUENTA_SUCCESS              = '[Cuenta] Insert cuenta success';
export const INSERT_CUENTA_ERROR                = '[Cuenta] Insert cuenta error';

export const LOAD_CUENTA                        = '[Cuenta] Load cuenta';
export const LOAD_CUENTA_SUCCESS                = '[Cuenta] Load cuenta succcess';
export const LOAD_CUENTA_ERROR                  = '[Cuenta] Load cuenta error';
export const LOAD_CUENTA_BY_ID                  = '[Cuenta] Load cuenta by id';
export const GET_CUENTA_BY_ID                   = '[Cuenta] Get cuenta by id';
export const UPDATE_CUENTA                      = '[Cuenta] Update cuenta';
export const DELETE_CUENTA                      = '[Cuenta] Delete cuenta';
export const LOAD_CUENTA_PRINT                  = '[Cuenta] Load cuenta print';
export const LOAD_CUENTA_PRINT_SUCCES           = '[Cuenta] Load cuenta print success';
export const LOAD_CUENTA_TITULO                 = '[Cuenta] Load cuenta titulo';
export const LOAD_CUENTA_TITULO_SUCCESS         = '[Cuenta] Load cuenta titulo success';
export const LOAD_CUENTA_DEPRE                  = '[Cuenta] Load cuenta depreciacion';
export const LOAD_CUENTA_DEPRE_SUCCESS          = '[Cuenta] Load cuenta depre success';
export const LOAD_CUENTA_SOBRANTE               = '[Cuenta] Load cuenta sobrante';
export const LOAD_CUENTA_SOBRANTE_SUCCESS       = '[Cuenta] Load cuenta sobrante success';
export const LOAD_CUENTA_FALTANTE               = '[Cuenta] Load cuenta faltante';
export const LOAD_CUENTA_FALTANTE_SUCCESS       = '[Cuenta] Load cuenta faltante success';
export const LOAD_CUENTA_GASTO_DEPRE            = '[Cuenta] Load cuenta gasto depre';
export const LOAD_CUENTA_GASTO_DEPRE_SUCCESS    = '[Cuenta] Load cuenta gasto depre success';
export const LOAD_CUENTA_GASTO_DEPRE_DIV            = '[Cuenta] Load cuenta gasto depre divisa';
export const LOAD_CUENTA_GASTO_DEPRE_DIV_SUCCESS    = '[Cuenta] Load cuenta gasto depre divias success';
export const LOAD_CUENTA_COUNT                  = '[Cuenta] Load cuenta count';
export const LOAD_CUENTA_COUNT_SUCCESS          = '[Cuenta] Load cuenta count success';


export class LoadCuenta implements Action {
    readonly type = LOAD_CUENTA;    
}
export class LoadCuentaSucces implements Action {
    readonly type = LOAD_CUENTA_SUCCESS;
    constructor(public payload: CuentaList[]){}
}
export class LoadCuentaError implements Action {
    readonly type = LOAD_CUENTA_ERROR;
    constructor( public payload: any){}
}
export class LoadCuentaById implements Action {
    readonly type = LOAD_CUENTA_BY_ID;  
    constructor(public payload: {id:number}){}  
}
export class GetCuentaById implements Action {
    readonly type = GET_CUENTA_BY_ID;
    constructor(public payload: any){} // aqui estoy obteniendo la cuenta segun un id cuenta
}
export class LoadCuentaPrint implements Action {
    readonly type = LOAD_CUENTA_PRINT;
    constructor(public payload: number){} //aqui estoy pasando el tipo cuenta id
}
export class LoadCuentaPrintSuccess implements Action {
    readonly type = LOAD_CUENTA_PRINT_SUCCES;
    constructor(public pyload: CuentaPrint[]){} //aqui obtengo la lista de cuentas segun su tipo cuenta
}
export class LoadCuentaTitulo implements Action {
    readonly type = LOAD_CUENTA_TITULO;
    constructor(public payload: number){} //aqui estoy pasando el tipo cuenta id
}
export class LoadCuentaTituloSuccess implements Action {
    readonly type = LOAD_CUENTA_TITULO_SUCCESS;
    constructor(public pyload: CuentaPrint[]){} //aqui obtengo la lista de cuentas segun su tipo cuenta
}
export class LoadCuentaDepre implements Action {
    readonly type = LOAD_CUENTA_DEPRE;
    constructor(public payload: number){} //aqui estoy pasando el tipo cuenta id
}
export class LoadCuentaDepreSuccess implements Action {
    readonly type = LOAD_CUENTA_DEPRE_SUCCESS;
    constructor(public pyload: CuentaPrint[]){} //aqui obtengo la lista de cuentas segun su tipo cuenta
}
export class LoadCuentaSobrante implements Action {
    readonly type = LOAD_CUENTA_SOBRANTE;
    constructor(public payload: number){} //aqui estoy pasando el tipo cuenta id
}
export class LoadCuentaSobranteSuccess implements Action {
    readonly type = LOAD_CUENTA_SOBRANTE_SUCCESS;
    constructor(public pyload: CuentaPrint[]){} //aqui obtengo la lista de cuentas segun su tipo cuenta
}
export class LoadCuentaFaltante implements Action {
    readonly type = LOAD_CUENTA_FALTANTE;
    constructor(public payload: number){} //aqui estoy pasando el tipo cuenta id
}
export class LoadCuentaFaltanteSuccess implements Action {
    readonly type = LOAD_CUENTA_FALTANTE_SUCCESS;
    constructor(public pyload: CuentaPrint[]){} //aqui obtengo la lista de cuentas segun su tipo cuenta
}

export class LoadCuentaGastoDepre implements Action {
    readonly type = LOAD_CUENTA_GASTO_DEPRE;
    constructor(public payload:{tipoId:number,moneId:number}){}
}
export class LoadCuentaGastoDepreSuccess implements Action {
    readonly type = LOAD_CUENTA_GASTO_DEPRE_SUCCESS;
    constructor(public payload: CuentaPrint[]){}
}
export class LoadCuentaGastoDepreDiv implements Action {
    readonly type = LOAD_CUENTA_GASTO_DEPRE_DIV;
    constructor(public payload:{tipoId:number,moneId:number}){}
}
export class LoadCuentaGastoDepreDivSuccess implements Action {
    readonly type = LOAD_CUENTA_GASTO_DEPRE_DIV_SUCCESS;
    constructor(public payload: CuentaPrint[]){}
}
export class LoadCuentaCount implements Action {
    readonly type = LOAD_CUENTA_COUNT;
    
}
export class LoadCuentaCountSuccess implements Action {
    readonly type = LOAD_CUENTA_COUNT_SUCCESS;
    constructor(public payload: number){}
}

export class InsertCuenta implements Action {
    readonly type = INSERT_CUENTA;
    constructor(public payload: Cuenta){}
    
}
export class InsertCuentaSuccess implements Action {
    readonly type = INSERT_CUENTA_SUCCESS;
    constructor(public payload: any){}
}
export class InsertCuentaError implements Action {
    readonly type = INSERT_CUENTA_ERROR;
    constructor(public payload: any){}
}
export class UpdateCuenta implements Action {
    readonly type = UPDATE_CUENTA;
    constructor(public payload: {cuenta:Cuenta}){} // cuenta que voy a actualizar
}
export class DeleteCuenta implements Action {
    readonly type = DELETE_CUENTA;
    constructor(public payload: number){}
}

export type CuentaAction = 
| InsertCuenta 
| InsertCuentaSuccess 
| InsertCuentaError
| LoadCuenta
| LoadCuentaSucces
| LoadCuentaError
| LoadCuentaById
| GetCuentaById
| LoadCuentaPrint
| LoadCuentaPrintSuccess
| LoadCuentaTitulo
| LoadCuentaTituloSuccess
| LoadCuentaDepre
| LoadCuentaDepreSuccess
| LoadCuentaSobrante
| LoadCuentaSobranteSuccess
| LoadCuentaFaltante
| LoadCuentaFaltanteSuccess
| LoadCuentaGastoDepre
| LoadCuentaGastoDepreSuccess
| LoadCuentaGastoDepreDiv
| LoadCuentaGastoDepreDivSuccess
| LoadCuentaCount
| LoadCuentaCountSuccess
| UpdateCuenta
| DeleteCuenta ;
import { Action }       from '@ngrx/store';
import { Tcp }          from '../../models/tcp.interface';
import { TcpShow }      from '../../models/tcp_show';

export const LOAD_TCP                   = '[Tcp] Load tcp';
export const LOAD_TCP_SUCCES            = '[Tcp] Load tcp success';
export const LOAD_TCP_BY_ID             = '[Tcp] Load tcp by id';
export const LOAD_TCP_BY_ID_SUCCESS     = '[Tcp] Load tcp by id success';
export const LOAD_TCP_ERROR             = '[Tcp] Load tcp error';
export const CREATE_TCP                 = '[Tcp] Create tcp';
export const TCP_SUCCESS                = '[Tcp] Tcp success';
export const UPDATE_TCP                 = '[Tcp] Update tcp';
export const DELETE_TCP                 = '[Tcp] Delete tcp';

export class LoadTcp implements Action {
    readonly type = LOAD_TCP;
}
export class LoadTcpSuccess implements Action {
    readonly type = LOAD_TCP_SUCCES;
    constructor(public payload: TcpShow){}
}
export class LoadTcpError implements Action {
    readonly type = LOAD_TCP_ERROR;
    constructor(public payload: string){}
}
export class LoadTcpById implements Action {
    readonly type = LOAD_TCP_BY_ID;
    constructor(public payload: number){}
}
export class LoadTcpByIdSuccess implements Action {
    readonly type = LOAD_TCP_BY_ID_SUCCESS;
    constructor(public payload: Tcp){}
}
export class CreateTcp implements Action {
    readonly type = CREATE_TCP;
    constructor(public payload: Tcp){}
}
export class TcpSuccess implements Action {
    readonly type = TCP_SUCCESS;
    constructor(public payload:string){}
}
export class UpdateTcp implements Action {
    readonly type = UPDATE_TCP;
    constructor(public payload: Tcp){}
}
export class DeleteTcp implements Action {
    readonly type = DELETE_TCP;
    constructor(public payload: number){}
}

export type TcpAction = 
| LoadTcp
| LoadTcpById
| LoadTcpByIdSuccess
| LoadTcpError
| LoadTcpSuccess
| CreateTcp
| TcpSuccess
| UpdateTcp
| DeleteTcp
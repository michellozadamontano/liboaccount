import * as fromTcp     from '../actions/tcp.action';
import { Tcp }          from '../../models/tcp.interface';
import { TcpShow }      from '../../models/tcp_show';

export interface State {
    tcpShow     : TcpShow;
    tcp         : Tcp;
    message     : string;
}

export const initialState: State = {
    tcpShow : null,
    tcp     : null,
    message : ''
}

export function reducer (state = initialState, action: fromTcp.TcpAction): State {
    switch(action.type)
    {
        case fromTcp.LOAD_TCP || fromTcp.CREATE_TCP || 
        fromTcp.UPDATE_TCP || fromTcp.DELETE_TCP || fromTcp.LOAD_TCP_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromTcp.LOAD_TCP_SUCCES:
        {
            return {
                ...state,
                tcpShow: action.payload[0]
            }
        }
        case fromTcp.LOAD_TCP_BY_ID_SUCCESS:
        {
            return {
                ...state,
                tcp: action.payload[0]
            }
        }
        case fromTcp.LOAD_TCP_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromTcp.TCP_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }

    }
    return state;
}

export const getTcpShow     = (state:State)=> state.tcpShow;
export const getTcp         = (state:State)=> state.tcp;
export const getTcpMessage  = (state:State)=> state.message;
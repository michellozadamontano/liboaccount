import * as fromCuentaTipo from '../actions/cuenta_tipo.action';
import { CuentaTipo } from '../../models/cuenta_tipo.interface';

export interface State {
    cuenta_tipos : CuentaTipo[];
    cuenta_tipo  : CuentaTipo;
    message      : string;
}
export const InitialState: State = {
    cuenta_tipos : [],
    cuenta_tipo  : null,
    message      : ''
}

export function reducer(state = InitialState, action: fromCuentaTipo.CuentaTipoAction):State {
    switch(action.type)
    {
        case fromCuentaTipo.LOAD_CUENTA_TIPO 
        || fromCuentaTipo.LOAD_CUENTA_TIPO_BY_ID
        || fromCuentaTipo.CREATE_CUENTA_TIPO
        || fromCuentaTipo.UPDATE_CUENTA_TIPO
        || fromCuentaTipo.DELETE_CUENTA_TIPO
        || fromCuentaTipo.GET_CUENTA_TIPO_BY_GRUPO:
        {
            return {
                ...state
            }
        }
        case fromCuentaTipo.LOAD_CUENTA_TIPO_SUCCESS:
        {
            return {
                ...state,
                cuenta_tipos: action.payload
            }
        }
        
        case fromCuentaTipo.LOAD_CUENTA_TIPO_BY_ID_SUCCESS:
        {
            return {
                ...state,
                cuenta_tipo: action.payload[0]
            }
        }
        case fromCuentaTipo.LOAD_CUENTA_TIPO_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        
        case fromCuentaTipo.CREATE_CUENTA_TIPO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }    
        
    }
    
    return state;
}

export const getCuentaTipos       = (state: State) => state.cuenta_tipos;
export const getCuentaTipo        = (state: State) => state.cuenta_tipo;
export const getCuentaTipoMessage = (state: State) => state.message;
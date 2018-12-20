
import * as fromCentroCosto from '../actions/centro_costo.action';
import { CentroCosto } from '../../models/centro_costo.interface';

export interface State {
    centro_costos : CentroCosto[];
    centro_costo  : CentroCosto;
    message      : string;
}
export const InitialState: State = {
    centro_costos : [],
    centro_costo  : null,
    message      : ''
}

export function reducer(state = InitialState, action: fromCentroCosto.CentroCostoAction):State {
    switch(action.type)
    {
        case fromCentroCosto.LOAD_CENTRO_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCentroCosto.LOAD_CENTRO_COSTO_SUCCESS:
        {
            return {
                ...state,
                centro_costos: action.payload
            }
        }
        case fromCentroCosto.LOAD_CENTRO_COSTO_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromCentroCosto.LOAD_CENTRO_COSTO_BY_ID_SUCCESS:
        {
            return {
                ...state,
                centro_costo: action.payload[0]
            }
        }
        case fromCentroCosto.LOAD_CENTRO_COSTO_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCentroCosto.CREATE_CENTRO_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCentroCosto.CREATE_CENTRO_COSTO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCentroCosto.UPDATE_CENTRO_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCentroCosto.DELETE_CENTRO_COSTO:
        {
            return {
                ...state
            }
        }
    }
    
    return state;
}

export const getCentroCostos        = (state: State) => state.centro_costos;
export const getCentroCosto         = (state: State) => state.centro_costo;
export const getCentroCostosMessage = (state: State) => state.message;
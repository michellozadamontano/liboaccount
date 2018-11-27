import * as fromCcost from '../actions/ccosto.action';
import { Ccosto } from '../../models/ccosto.interface';
import { CcostoList } from '../../models/ccosto_list.interface';

export interface State {
    costos  : CcostoList[];
    costo   : Ccosto;
    message : string;
    sicodigo: any;
}

export const InitialState: State = {
    costos  : [],
    costo   : null,
    message : '',
    sicodigo: null
}

export function reducer(state = InitialState, action: fromCcost.CostoAction): State {
    switch(action.type)
    {
        case fromCcost.LOAD_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCcost.LOAD_COSTO_SUCCESS:
        {
            return {
                ...state,
                costos: action.payload['costo']
            }
        }
        case fromCcost.LOAD_COSTO_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCcost.LOAD_COSTO_BY_ID:
        {
            return {
                ...state,    
            }
        }
        case fromCcost.LOAD_COSTO_BY_ID_SUCCESS:
        {
            return {
                ...state,
                costo: action.payload    
            }
        }
        case fromCcost.INSERT_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCcost.INSERT_COSTO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCcost.UPDATE_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCcost.UPDATE_COSTO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCcost.DELETE_COSTO:
        {
            return {
                ...state
            }
        }
        case fromCcost.DELETE_COSTO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCcost.CHECK_CODIGO:
        {
            return {
                ...state
            }
        }
        case fromCcost.CHECK_CODIGO_SUCCESS:
        {
            console.log(action.payload);
            
            return {
                ...state,
                sicodigo: action.payload
            }
        }
    }
    return state;
}

export const getCostos          = (state:State) => state.costos;
export const getCostoMessage    = (state:State) => state.message;
export const getCosto           = (state:State) => state.costo;
export const getSiCodigo        = (state:State) => state.sicodigo;
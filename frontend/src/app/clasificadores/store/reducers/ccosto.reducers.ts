import * as fromCcost from '../actions/ccosto.action';
import { Ccosto } from '../../models/ccosto.interface';

export interface State {
    costos: Ccosto[];
    message: string;
}

export const InitialState: State = {
    costos  : [],
    message : ''
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
    }
    return state;
}

export const getCostos = (state:State) => state.costos;
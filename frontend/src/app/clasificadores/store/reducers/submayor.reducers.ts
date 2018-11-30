import * as fromSubmayor from '../actions/submayor.action';
import { Submayor } from '../../models/submayor.interface';

export interface State {
    submayor        : Submayor;
    submayorList    : Submayor[];
    message         : string;
}
export const InitialState: State = {
    submayor    : null,
    submayorList: [],
    message     : ""
}

export function reducer(state = InitialState, action: fromSubmayor.SubmayorAction): State {
    switch(action.type)
    {
        case fromSubmayor.LOAD_SUBMAYOR:
        {
            return {
                ...state
            }
        }
        case fromSubmayor.LOAD_SUBMAYOR_SUCCESS:
        {
            return {
                ...state,
                submayorList: action.payload['result']
            }
        }
        case fromSubmayor.LOAD_SUBMAYOR_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromSubmayor.LOAD_SUBMAYOR_BY_ID_SUCCESS:
        {
            return {
                ...state,
                submayor: action.payload['result'][0]
            }
        }
        case fromSubmayor.CREATE_SUBMAYOR:
        {
            return {
                ...state
            }
        }
        case fromSubmayor.CREATE_SUBMAYOR_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubmayor.LOAD_SUBMAYOR_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubmayor.UPDATE_SUBMAYOR:
        {
            return {
                ...state
            }
        }
        case fromSubmayor.UPDATE_SUBMAYOR_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubmayor.DELETE_SUBMAYOR:
        {
            return {
                ...state
            }
        }
    }

    return state;
}

// slice
export const getSubmayorList    = (state:State) => state.submayorList;
export const getSubmayorMessage = (state:State) => state.message;
export const getSubmayor        = (state:State) => state.submayor;
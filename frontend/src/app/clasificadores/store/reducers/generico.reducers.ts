import * as fromGenerico from '../actions/generico.action';
import { GenericoList } from '../../models/generico_list.interface';
import { Generico } from '../../models/generico.interface';

export interface State {
    genericoList    : GenericoList[];
    generic         : Generico;   
    message         : string;
}
export const initialSate: State = {
    genericoList    : [],
    generic         : null,    
    message         : ''
}

export function reducer(state = initialSate, action: fromGenerico.GenericoAction): State {
    switch(action.type)
    {
        case fromGenerico.LOAD_GENERICO:
        {
            return {
                ...state
            }
        }
        case fromGenerico.LOAD_GENERICO_SUCCESS:
        {    
            return {
                ...state,
                genericoList: action.payload['result']
            }
        }
        case fromGenerico.LOAD_GENERICO_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromGenerico.GENERICO_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromGenerico.GENERICO_BY_ID_SUCCESS:
        {
            console.log(action.payload['result'][0]);
            
            return {
                ...state,
                generic: action.payload['result'][0]
            }
        }
        
        case fromGenerico.CREATE_GENERICO:
        {
            return {
                ...state
            }
        }
        case fromGenerico.CREATE_GENERICO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromGenerico.UPDATE_GENERICO:
        {
            return {
                ...state
            }
        }
        case fromGenerico.UPDATE_GENERICO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromGenerico.DELETE_GENERICO:
        {
            return {
                ...state
            }
        }
        case fromGenerico.DELETE_GENERICO_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state;
}
export const getGenerico            = (state:State) => state.generic;
export const getGenericoList        = (state:State) => state.genericoList;
export const getGenericoMessage     = (state:State) => state.message;

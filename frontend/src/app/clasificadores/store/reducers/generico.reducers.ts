import * as fromGenerico from '../actions/generico.action';
import { GenericoList } from '../../models/generico_list.interface';
import { Generico } from '../../models/generico.interface';

export interface State {
    genericoList: GenericoList[];
    generico    : Generico;
    message     : string;
}
export const initialSate: State = {
    genericoList    :[],
    generico        : null,
    message         : ''
}

export function reducer(state = initialSate,action: fromGenerico.GenericoAction):State {
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
}

export const getGenericoList        = (state:State) => state.genericoList;
export const getGenerico            = (state:State) => state.generico;
export const getGenericoMessage     = (state:State) => state.message;
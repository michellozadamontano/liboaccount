import * as fromSubArea from '../actions/subarea.action';
import { SubArea } from '../../models/subarea.interface';


// defino el estado
export interface State {
    subareas: SubArea[],
    subarea : SubArea,
    message : string
}
export const InitialState: State = {
    subareas: [],
    subarea: null,
    message: ""
}

export function reducer(state = InitialState, action: fromSubArea.SubAreaAction):State {
    switch(action.type)
    {
        case fromSubArea.LOAD_SUB_AREAS:
        {
            return {
                ...state
            }
        }
        case fromSubArea.LOAD_SUB_AREAS_SUCCESS:
        {
            return {
                ...state,
                subareas: action.payload['result']
            }
        }
        case fromSubArea.LOAD_SUB_AREAS_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubArea.LOAD_SUB_AREAS_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromSubArea.LOAD_SUB_AREAS_BY_ID_SUCCESS:
        {
            return {
                ...state,
                subarea: action.payload['result'][0]
            }
        }
        case fromSubArea.CREATE_SUB_AREA:
        {
            return {
                ...state
            }
        }
        case fromSubArea.CREATE_SUB_AREA_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubArea.UPDATE_SUB_AREA:
        {
            return {
                ...state
            }
        }
        case fromSubArea.UPDATE_SUB_AREA_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromSubArea.DELETE_SUB_AREA:
        {
            return {
                ...state
            }
        }
        case fromSubArea.DELETE_SUB_AREA_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state;
}

export const getSubAreas        = (state:State)=> state.subareas;
export const getSubArea         = (state:State)=> state.subarea;
export const getSubAreaMessage  = (state:State)=> state.message;
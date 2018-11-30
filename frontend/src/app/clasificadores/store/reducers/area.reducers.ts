import * as fromArea from '../actions/areas.action';
import { AreaList } from '../../models/area_list.interface';
import { Area } from '../../models/area.interface';


export interface State {
    areas   : AreaList[];
    area    : Area;
    message : any;
}

export const InitalState: State = {
    areas   : [],
    area    : null,
    message : ""
}

export function reducer(state = InitalState, action: fromArea.AreaAction): State {
    switch(action.type)
    {
        case fromArea.LOAD_AREA:
        {
            return {
                ...state
            }
        }
        case fromArea.LOAD_AREA_SUCCESS:
        {   
            return {
                ...state,
                areas: action.payload['result']
            }
        }
        case fromArea.LOAD_AREA_BY_ID:
        {
            return {
                ...state
            }
        }
        case fromArea.LOAD_AREA_BY_ID_SUCCESS:
        {
            let ar = action.payload['result'][0];
            return {
                ...state,
                area: ar
            }
        }
        case fromArea.CREATE_AREA:
        {
            return {
                ...state
            }
        }
        case fromArea.CREATE_AREA_SUCCES:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromArea.UPDATE_AREA:
        {
            return {
                ...state
            }
        }
        case fromArea.UPDATE_AREA_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromArea.DELETE_AREA:
        {
            return {
                ...state
            }
        }
        case fromArea.DELETE_AREA_SUCCESS:
        {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state;
}

export const getAreas       = (state:State)=> state.areas;
export const getArea        = (state:State)=> state.area;
export const getAreaMessage = (state:State)=> state.message;
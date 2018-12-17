import * as fromActividad        from '../actions/actividades.action';
import { Actividades }          from '../../models/actividades.interface';

export interface State {
    actividad_list  : Actividades[];
    actividad       : Actividades;
    message         : string;
}

export const InitialState: State = {
    actividad_list  : [],
    actividad       : null,
    message         : ''
}

export function reducer(state = InitialState, action:fromActividad.ActividadAction):State {
    switch(action.type)
    {
        case fromActividad.LOAD_ACTIVIDADES:
        {
            return {
                ...state
            }
        }
        case fromActividad.LOAD_ACTIVIDADES_SUCCESS:
        {
            console.log(action.payload);
            
            return {
                ...state,
                actividad_list: action.payload
            }
        }
        case fromActividad.LOAD_ACTIVIDADES_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    return state;
}

export const getActividadList       = (state:State)=> state.actividad_list;
export const getActividad           = (state:State)=> state.actividad;
export const getActividaMessage     = (state:State)=> state.message;
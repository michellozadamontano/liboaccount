import * as fromEntidad from '../actions/entidad.actions';
import { Entidad }      from '../../models/entidad.interface';
import { load } from '@angular/core/src/render3/instructions';

export interface State {
    entidad : Entidad[];
    loaded  : boolean;
    loading : boolean;
    message : string;
}
export const InitialState: State = {
    entidad :[],
    loaded  : false,
    loading : false,
    message : ''
}

export function reducer(state = InitialState, action:fromEntidad.EntidadAction):State {
    switch(action.type)
    {
        case fromEntidad.LOAD_ENTIDAD:
        return {
            ...state,
            loading: true,

        }
        case fromEntidad.LOAD_ENTIDAD_SUCCESS:
        console.log(action.payload.entidad);                
        return {
            ...state,
            entidad: action.payload.entidad,
            loaded: true,
            loading: false,

        }
        case fromEntidad.LOAD_ENTIDAD_ERROR:
        return {
            ...state,
            loading : true,
            loaded  : false,
            message : action.payload

        }
    }
    return state;
}

export const getEntidad = (state:State) => state.entidad;
export const getEntidadMessage = (state: State) => state.message;
export const getEntidadLoaded = (state: State)=> state.loaded;

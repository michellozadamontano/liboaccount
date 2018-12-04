import * as fromEntidad from '../actions/entidad.actions';
import { Entidad }      from '../../models/entidad.interface';


export interface State {
    entidad : Entidad;
    loaded  : boolean;
    loading : boolean;
    message : string;
}
export const InitialState: State = {
    entidad : null,
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
        {
            let entity = null;  
            
            if(action.payload['result'] != undefined)
            {
                entity = action.payload['result'][0];
            }
            return {
                ...state,
                entidad: entity,
                loaded: true,
                loading: false,
    
            }
        }                      
        
        case fromEntidad.LOAD_ENTIDAD_ERROR:
        return {
            ...state,
            loading : true,
            loaded  : false,
            message : action.payload

        }
        case fromEntidad.CREATE_ENTIDAD:
        {
            return {
                ...state
            }
        }
        case fromEntidad.UPDATE_ENTIDAD:
        {
            return {
                ...state
            }
        }
    }
    return state;
}

export const getEntidad = (state:State) => state.entidad;
export const getEntidadMessage = (state: State) => state.message;
export const getEntidadLoaded = (state: State)=> state.loaded;

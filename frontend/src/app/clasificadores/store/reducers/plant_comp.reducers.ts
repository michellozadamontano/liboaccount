import * as fromPlantilla from '../actions/plantilla_comp.action';
import { PlantillaComp } from '../../models/plantilla_comp.interface';

export interface State {
    plantillas  : PlantillaComp[];
    message     : string;
}
export const InitialState: State = {
    plantillas  : [],
    message     : ""
}

export function reducer(state = InitialState, action: fromPlantilla.PlantillaAction):State {
    switch(action.type)
    {
        case fromPlantilla.LOAD_PLANTILLA:
        {
            return {
                ...state
            }
        }
        case fromPlantilla.LOAD_PLANTILLA_SUCCESS:
        {
            return {
                ...state,
                plantillas: action.payload['result']
            }
        }
        case fromPlantilla.LOAD_PLANTILLA_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
    }
    
    return state;
}

export const getPlantillas          = (state:State) => state.plantillas;
export const getPlantillaMessage    = (state:State) => state.message; 
import * as fromMoneda  from '../actions/moneda.actions';
import { Moneda }       from '../../models/moneda.interface';


export interface State {
    data    : Moneda[];
    loaded  : boolean;
    loading : boolean;
}
 
export const InitialState: State = {
    data    : [{id:1,descripcion: 'USD'}],
    loaded  : false,
    loading : false
}

export function reducer(state = InitialState, action: fromMoneda.MonedaAction): State {
    switch(action.type){
        case fromMoneda.CARGAR_MONEDA: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromMoneda.CARGAR_MONEDA_EXITO: {
            const data = action.payload;                        
            return {
                ...state,
                loaded: true,
                loading: false,
                data:data['moneda']
            };
        }
        case fromMoneda.CARGAR_MONEDA_ERROR: {
            return {
                ...state,
                loading: true,
            };
        }
    }

    return state;
}

export const getMonedaLoaded    = (state: State) => state.loaded;
export const getMonedaLoading   = (state: State) => state.loading;
export const getMoneda          = (state: State) => state.data;
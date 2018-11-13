import * as fromTasa    from '../actions/tasas.action';
import { Tasas }        from '../../models/tasas.interface';
import { Tasa_Cuenta }  from '../../models/tasa_cuenta.interface'; 

export interface State {
    tasas           : Tasas[];
    loading         : boolean;
    loaded          : boolean;
    message         : string;
    tasa_cuentas    : Tasa_Cuenta[];
    tasaId          : number;
}
export const InitialState: State = {
    tasas       : [],
    loading     : false,
    loaded      : false,
    message     : '',
    tasa_cuentas: [],
    tasaId      : null
}

export function reducer(state = InitialState, action:fromTasa.TasaAction ): State {
    switch(action.type)
    {
        case fromTasa.LOAD_TASAS:
        {
            return {
                ...state,
                loading: true
            }
        }
        case fromTasa.LOAD_TASAS_SUCCESS:
        {
            return {
                ...state,
                tasas: action.payload['tasas']
            }
        }
        case fromTasa.LOAD_TASA_CUENTA:
        {
            return {
                ...state,
                tasaId: action.payload.id                
            }
        }
        case fromTasa.LOAD_TASA_CUENTA_SUCCESS:
        {            
            return {
                ...state,
                tasa_cuentas: action.payload['cuentas_tasa']
            }
        }
        case fromTasa.LOAD_TASAS_ERROR:
        {
            return {
                ...state,
                message: action.payload
            }
        }
        case fromTasa.INSERT_TASA:
        {
            return{
                ...state,                
            }
        }
        case fromTasa.INSERT_TASA_SUCCESS:
        {                       
            return{
                ...state,
                message: action.payload
            }
        }

    }
    return state;
}

export const getTasas = (state:State) => state.tasas;
export const getTasasMessage = (state:State) => state.message;
export const getTasasLoaded = (state:State) => state.loaded;
export const getTasaCuentas = (state:State) => state.tasa_cuentas;
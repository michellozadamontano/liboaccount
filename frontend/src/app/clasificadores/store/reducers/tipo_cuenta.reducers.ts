import * as fromTipoCuenta  from '../actions/tipo_cuenta.actions';
import { TipoCuenta }       from '../../models/tipo_cuenta.interface';

export interface State {
    data    : TipoCuenta[];
    loaded  : boolean;
    loading : boolean;    
}

export const InitialState: State = {
    data    : [{id:1,descripcion:'tempo'}],
    loaded  : false,
    loading : false
}

export function reducer(state = InitialState, action: fromTipoCuenta.TipoCuentaAction):State {
    switch(action.type)
    {
        case fromTipoCuenta.LOAD_TIPOCUENTA:{
            return{
                ...state,
                loading:true
            }
        }
        case fromTipoCuenta.LOAD_TIPOCUENTA_SUCCESS: {            
            
            return{
                ...state,
                loaded : true,
                loading: false,
                data   : action.payload['tipo_cuenta']
            }
        }
        case fromTipoCuenta.LOAD_TIPOCUENTA_ERROR: {
            return {
                ...state,
                loading: true
            }
        }
    }
    return state;
}

export const getTipoCuenta          = (state: State)=> state.data;
export const getTipoCuentaLoaded    = (state: State)=> state.loaded;
export const getTipoCuentaLoading   = (state: State)=> state.loading;
import * as fromCuenta from '../actions/cuenta_plan.action';
import { CuentaPlanList } from '../../models/cuenta_plan_list.interface';
import { CuentaPlan } from '../../models/cuenta_plan.interface';

//import or declare state

export interface State {
    cuentaList          : CuentaPlanList[];
    cuentaByTipoList    : CuentaPlan[];
    cuentaPlan          : CuentaPlan;
    message             : string;
}
export const intialState: State = {
    cuentaList          : [],
    cuentaByTipoList    : [],
    cuentaPlan          : null,
    message             : ''
};
export function cuentaPlanReducer(state = intialState, action: fromCuenta.CuentaPlanActions) {
    switch (action.type) {
        case fromCuenta.LOAD_CUENTA_PLAN
        || fromCuenta.LOAD_CUENTA_PLAN_BY_ID
        || fromCuenta.CREATE_CUENTA_PLAN
        || fromCuenta.UPDATE_CUENTA_PLAN
        || fromCuenta.DELETE_CUENTA_PLAN
        || fromCuenta.GET_CUENTA_PLAN_BY_TIPO: {            
            return { ...state };
        }
        case fromCuenta.LOAD_CUENTA_PLAN_SUCCESS:{
            return {
                ...state,
                cuentaList: action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_PLAN_BY_ID_SUCCESS:{
            return {
                ...state,
                cuentaPlan: action.payload[0]
            }
        }
        case fromCuenta.GET_CUENTA_PLAN_BY_TIPO_SUCCESS:{
            return {
                ...state,
                cuentaByTipoList: action.payload
            }
        }
        case fromCuenta.CUENTA_PLAN_SUCCESS:{
            return {
                ...state,
                message: action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_PLAN_FAIL: {
            return {
                ...state,
                message: action.payload
            }
        }


        default: 
            return state;
    }
}

export const getCuentaList          = (state:State)=> state.cuentaList;
export const getCuentaByTipoList    = (state:State) => state.cuentaByTipoList;
export const getCuentaPlan          = (state:State) => state.cuentaPlan;
export const getCuentaPlanMessage   = (state:State) => state.message;
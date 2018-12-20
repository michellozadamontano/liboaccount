import * as fromMayor from '../actions/cuenta_mayor.action';
import { CuentaMayor } from '../../models/cuenta_mayor.interface';
//import or declare state

export interface State {
    mayorList   : CuentaMayor[],
    mayor       : CuentaMayor,
    message     : string
}
export const intialState: State = {
    mayorList: [],
    mayor    : null,
    message  : ''
};
export function reducer(state = intialState, action: fromMayor.Actions) {
    switch (action.type) {
        case fromMayor.LOAD_CUENTA_MAYOR || 
        fromMayor.LOAD_CUENTA_MAYOR_BY_ID || 
        fromMayor.CREATE_CUENTA_MAYOR || 
        fromMayor.UPDATE_CUENTA_MAYOR || 
        fromMayor.DELETE_CUENTA_MAYOR: {
            //add your code
            return { ...state };
        }
        case fromMayor.LOAD_CUENTA_MAYOR_SUCCESS: {
            return {
                ...state,
                mayorList: action.payload
            }
        }
        case fromMayor.LOAD_CUENTA_MAYOR_BY_ID_SUCCESS:{
            return {
                ...state,
                mayor: action.payload[0]
            }
        }
        case fromMayor.CUENTA_MAYOR_SUCCESS: {
            return {
                ...state,
                message: action.payload
            }
        }


        default: 
            return state;
    }
}

export const getMayorList       = (state:State)=>state.mayorList;
export const getMayor           = (state:State)=>state.mayor; 
export const getMayorMessage    = (state:State)=>state.message;
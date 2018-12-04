import * as fromProvince from '../actions/provincia.action';
import { Provincia } from '../../models/provincia.interface';


export interface State {
    provinces   : Provincia[];
    loaded      : boolean;
    loading     : boolean;
    message     : string;
}

export const InitialState: State = {
    provinces:[],
    loaded: false,
    loading: false,
    message: ''
}

export function reducer(state = InitialState, action: fromProvince.ProvinceAction): State {
    switch(action.type)
    {
        case fromProvince.LOAD_PROVINCE:
        return {
            ...state,
            loading: true
        }
        case fromProvince.LOAD_PROVINCE_SUCCESS:    
        return { 
            ...state,
            provinces   : action.payload.provincia['result'],
            loaded      : true,
            loading     : false
        }
        case fromProvince.LOAD_PROVINCE_ERROR:
        return {
            ...state,
                message: action.payload
        }
    }
    
    return state;
}
export const getProvinces           = (state: State)=> state.provinces;
export const getProvinceMessage     = (state: State)=> state.message;
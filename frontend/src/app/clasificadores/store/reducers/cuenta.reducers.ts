import * as fromCuenta      from '../actions/cuenta.actions';
import { CuentaList }       from '../../models/cuenta_list.interface';
import { CuentaPrint }      from '../../models/cuenta_print.interface';

export interface State {
    inserting       : boolean;
    inserted        : boolean;
    message         : string;
    cuenta          : CuentaList[];
    loading         : boolean;
    loaded          : boolean;
    cuentabyId      : any; //cuenta by id que viene de la api
    cuentaPrint     : CuentaPrint[];
    cuentaTitulo    : CuentaPrint[];
    cuentaDepre     : CuentaPrint[];
    cuentaSobrante  : CuentaPrint[];
    cuentaFaltante  : CuentaPrint[];
    tipo_cuenta_id  : number;
}

export const InitialState: State = {
    inserting       : false,
    inserted        : false,
    message         : '',
    cuenta          : [],
    loading         : false,
    loaded          : false,
    cuentabyId      : {id: 32, cuenta: "632541", descripcion: "sobrantes", moneda: 2, tipo: 5},
    cuentaPrint     : [],
    cuentaTitulo    : [],
    cuentaDepre     : [],
    cuentaSobrante  : [],
    cuentaFaltante  : [],
    tipo_cuenta_id  : null
}

export function reducer(state = InitialState, action: fromCuenta.CuentaAction): State{
    switch(action.type)
    {
        case fromCuenta.LOAD_CUENTA:
        {
            return {
                ...state,
                loading: true
            }
        }
        case fromCuenta.LOAD_CUENTA_SUCCESS:
        {               
            return {
                ...state,
                loaded: true,
                loading: false,
                cuenta: action.payload['cuentas']
            }
        }        
        case fromCuenta.LOAD_CUENTA_ERROR:
        {
            console.log(action.payload);
            
            return {
                ...state,
                loaded: false,
                message: action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_BY_ID:
        {
            return {
                ...state,
               // cuentabyId: action.payload
            }
        }
        case fromCuenta.GET_CUENTA_BY_ID:
        {
            console.log(action.payload['cuenta']);
            
            return {
                ...state,
                cuentabyId: action.payload['cuenta']
            }
        }
        case fromCuenta.LOAD_CUENTA_PRINT:
        {
            return {
                ...state,
                tipo_cuenta_id : action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_PRINT_SUCCES:
        {            
            return {
                ...state,
                cuentaPrint: action.pyload['cuenta']
            }
        }
        case fromCuenta.LOAD_CUENTA_TITULO:
        {
            return {
                ...state,
                tipo_cuenta_id : action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_TITULO_SUCCESS:
        {   
            console.log(action.pyload['cuenta']);         
            return {
                ...state,
                cuentaTitulo: action.pyload['cuenta']
            }
        } 
        case fromCuenta.LOAD_CUENTA_DEPRE:
        {
            return {
                ...state,
                tipo_cuenta_id : action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_DEPRE_SUCCESS:
        {            
            return {
                ...state,
                cuentaDepre: action.pyload['cuenta']
            }
        }
        case fromCuenta.LOAD_CUENTA_SOBRANTE:
        {
            return {
                ...state,
                tipo_cuenta_id : action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_SOBRANTE_SUCCESS:
        {            
            return {
                ...state,
                cuentaSobrante: action.pyload['cuenta']
            }
        } 
        case fromCuenta.LOAD_CUENTA_FALTANTE:
        {            
            return {
                ...state,
                tipo_cuenta_id : action.payload
            }
        }
        case fromCuenta.LOAD_CUENTA_FALTANTE_SUCCESS:
        {  
            console.log(action.pyload['cuenta']);
                      
            return {
                ...state,
                cuentaFaltante: action.pyload['cuenta']
            }
        }             
        
        case fromCuenta.INSERT_CUENTA: {
            return {
                ...state,
                inserting: true,
                inserted: false,
               // cuenta: action.payload                
            }
        }
        case fromCuenta.INSERT_CUENTA_SUCCESS: {
            return {
                ...state,
                message: action.payload['message']
            }
        }
        case fromCuenta.INSERT_CUENTA_ERROR: {
            console.log(action.payload);
            
            return {
                ...state,
                message: action.payload['error']
            }
        }
        case fromCuenta.UPDATE_CUENTA:
        {
            return {
                ...state,
            }
        }
        case fromCuenta.DELETE_CUENTA:
        {
            return {
                ...state,
            }
        }
    }

    return state;
}
export const getCuenta          = (state: State) => state.cuenta;
export const getCuentaMessage   = (state: State) => state.message;
export const getCuentaById      = (state: State) => state.cuentabyId;
export const getCuentaPrint     = (state: State) => state.cuentaPrint;
export const getCuentaTitulo    = (state: State) => state.cuentaTitulo;
export const getCuentaDepre     = (state: State) => state.cuentaDepre;
export const getCuentaSobrante  = (state: State) => state.cuentaSobrante;
export const getCuentaFaltante  = (state: State) => state.cuentaFaltante;
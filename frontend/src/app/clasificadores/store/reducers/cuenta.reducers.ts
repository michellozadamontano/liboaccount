import * as fromCuenta      from '../actions/cuenta.actions';
import { CuentaList }       from '../../models/cuenta_list.interface';
import { CuentaPrint }      from '../../models/cuenta_print.interface';
import { Action, combineReducers }           from '@ngrx/store';
import { FormGroupState, 
    createFormGroupState, 
    formGroupReducer }      from 'ngrx-forms';
    import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
    import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';
import { Cuenta } from '../../models/cuenta.interface';

export interface CuentaForm {
    cuenta          : string;
    descripcion     : string;
    moneda          : number;
    predeterminada  : boolean;
    tipo            : number;
    ccosto?         : number;
} 
const FORM_ID = 'cuentaForm';
export const initialFormState = createFormGroupState<CuentaForm>(FORM_ID, {
    cuenta: '',
    descripcion:'',
    moneda: null,
    predeterminada: false,
    tipo: null,
    ccosto: null 

}) 

export interface CuentaState {
    inserting           : boolean;
    inserted            : boolean;
    message             : string;
    cuenta              : CuentaList[];
    loading             : boolean;
    loaded              : boolean;
    cuentabyId          : Cuenta; //cuenta by id que viene de la api
    cuentaPrint         : CuentaPrint[];
    cuentaTitulo        : CuentaPrint[];
    cuentaDepre         : CuentaPrint[];
    cuentaSobrante      : CuentaPrint[];
    cuentaFaltante      : CuentaPrint[];
    cuentaGastoDepre    : CuentaPrint[];
    cuentaGastoDepreDiv : CuentaPrint[];
    tipo_cuenta_id      : number;
    myForm              : FormGroupState<CuentaForm>;
    cuentaCount         : number;
}
const initialCuentaState : CuentaState  = {
    inserting           : false,
    inserted            : false,
    message             : '',
    cuenta              : [],
    loading             : false,
    loaded              : false,
    cuentabyId          : null,
    cuentaPrint         : [],
    cuentaTitulo        : [],
    cuentaDepre         : [],
    cuentaSobrante      : [],
    cuentaFaltante      : [],
    cuentaGastoDepre    : [],
    cuentaGastoDepreDiv : [],
    tipo_cuenta_id      : null,
    myForm              : initialFormState,
    cuentaCount         : 0
}

export interface State {
    cuentaState : CuentaState,
    myForm      : FormGroupState<CuentaForm>;
}

export const InitialState: State = {
    cuentaState     : initialCuentaState,
    myForm          : initialFormState
}

export const validationFormGroupReducer = createFormStateReducerWithUpdate<CuentaForm>(updateGroup<CuentaForm>({
    cuenta      : validate(required),
    descripcion : validate(required),
    moneda      : validate(required),
    tipo        : validate(required),
  }));

const reducers = combineReducers<State,any>({
    myForm(s = initialFormState,a:Action){
        return validationFormGroupReducer(s,a);
    },
    cuentaState(state = initialCuentaState, action: fromCuenta.CuentaAction):State['cuentaState'] {
        const myForm = formGroupReducer(state.myForm, action);
        if (myForm !== state.myForm) {
            state = { ...state, myForm };
        }
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
                    loaded  : true,
                    loading : false,
                    cuenta  : action.payload['cuentas']               
                }
            }        
            case fromCuenta.LOAD_CUENTA_ERROR:
            {    
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
                let cuenta: Cuenta = {
                    id: action.payload[0].id,
                    tipo_cuenta_id: action.payload[0].tipo_cuenta_id,
                    cuenta : action.payload[0].cuenta,
                    descripcion: action.payload[0].descripcion,
                    moneda_id : action.payload[0].moneda_id,
                    ccosto_id: action.payload[0].ccosto_id,
                    predeterminada: action.payload[0].predeterminada.data[0],
                }
                return {
                    ...state,
                    cuentabyId: cuenta         
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
                return {
                    ...state,
                    cuentaFaltante: action.pyload['cuenta']
                }
            }
            case fromCuenta.LOAD_CUENTA_GASTO_DEPRE:
            {
                return {
                    ...state
                }
            }
            case fromCuenta.LOAD_CUENTA_GASTO_DEPRE_SUCCESS:
            {
                return {
                    ...state,
                    cuentaGastoDepre: action.payload['result']
                }
            }
            case fromCuenta.LOAD_CUENTA_GASTO_DEPRE_DIV:
            {
                return {
                    ...state
                }
            }
            case fromCuenta.LOAD_CUENTA_GASTO_DEPRE_DIV_SUCCESS:
            {
                return {
                    ...state,
                    cuentaGastoDepreDiv: action.payload['result']
                }
            }
            case fromCuenta.LOAD_CUENTA_COUNT:
            {
                return {
                    ...state
                }
            }  
            case fromCuenta.LOAD_CUENTA_COUNT_SUCCESS:
            {
                console.log(action.payload);
                
                return {
                    ...state,
                    cuentaCount: action.payload
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
})
export function reducer(state = InitialState, action: fromCuenta.CuentaAction): State{
    return reducers(state,action)
  
}
export const getCuenta              = (state: State) => state.cuentaState.cuenta;
export const getCuentaMessage       = (state: State) => state.cuentaState.message;
export const getCuentaById          = (state: State) => state.cuentaState.cuentabyId;
export const getCuentaPrint         = (state: State) => state.cuentaState.cuentaPrint;
export const getCuentaTitulo        = (state: State) => state.cuentaState.cuentaTitulo;
export const getCuentaDepre         = (state: State) => state.cuentaState.cuentaDepre;
export const getCuentaSobrante      = (state: State) => state.cuentaState.cuentaSobrante;
export const getCuentaFaltante      = (state: State) => state.cuentaState.cuentaFaltante;
export const getCuentaGastoDepre    = (state: State) => state.cuentaState.cuentaGastoDepre;
export const getCuentaGastoDepreDiv = (state: State) => state.cuentaState.cuentaGastoDepreDiv;
export const getMyForm              = (state: State) => state.myForm;
export const getCuentaCount         = (state: State) => state.cuentaState.cuentaCount;
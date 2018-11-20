import * as fromCuenta      from '../actions/cuenta.actions';
import { CuentaList }       from '../../models/cuenta_list.interface';
import { CuentaPrint }      from '../../models/cuenta_print.interface';
import { Action, combineReducers }           from '@ngrx/store';
import { FormGroupState, 
    createFormGroupState, 
    formGroupReducer }      from 'ngrx-forms';
    import { createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
    import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';

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
    myForm          : FormGroupState<CuentaForm>;
}
const initialCuentaState : CuentaState  = {
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
    tipo_cuenta_id  : null,
    myForm          : initialFormState
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
                console.log(action.payload['cuenta'][0].cuenta);
                return {
                    ...state,
                    cuentabyId: action.payload['cuenta'],
                    myForm: createFormGroupState<CuentaForm>(FORM_ID, {
                        cuenta: action.payload['cuenta'][0].cuenta,
                        descripcion: action.payload['cuenta'][0].descripcion,
                        moneda: action.payload['cuenta'][0].moneda,
                        predeterminada: action.payload['cuenta'][0].predeterminada,
                        tipo: action.payload['cuenta'][0].tipo,
                        ccosto: action.payload['cuenta'][0].ccosto 
                    })          
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
export const getCuenta          = (state: State) => state.cuentaState.cuenta;
export const getCuentaMessage   = (state: State) => state.cuentaState.message;
export const getCuentaById      = (state: State) => state.cuentaState.cuentabyId;
export const getCuentaPrint     = (state: State) => state.cuentaState.cuentaPrint;
export const getCuentaTitulo    = (state: State) => state.cuentaState.cuentaTitulo;
export const getCuentaDepre     = (state: State) => state.cuentaState.cuentaDepre;
export const getCuentaSobrante  = (state: State) => state.cuentaState.cuentaSobrante;
export const getCuentaFaltante  = (state: State) => state.cuentaState.cuentaFaltante;
export const getMyForm          = (state: State) => state.myForm;
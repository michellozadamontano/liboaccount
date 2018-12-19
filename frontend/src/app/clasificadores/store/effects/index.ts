import { CuentaTipoEffects }    from './cuenta_tipo.effects';
import {ActividadEffects }      from './actividad.effects'
import { TcpEffects }           from './tcp.effects';
import { CentroCostoEffects }   from './centro_costo.effects';


export const effects: any[] = [
    CuentaTipoEffects, 
    ActividadEffects,
    TcpEffects,
    CentroCostoEffects   
]

export * from './cuenta_tipo.effects';
export * from './actividad.effects';
export * from './tcp.effects';
export * from './centro_costo.effects';
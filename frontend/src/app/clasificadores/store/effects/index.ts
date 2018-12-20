import { CuentaTipoEffects }    from './cuenta_tipo.effects';
import {ActividadEffects }      from './actividad.effects'
import { TcpEffects }           from './tcp.effects';
import { MayorEffects}          from './cuenta_mayor.effect';
import { CentroCostoEffects }   from './centro_costo.effects';


export const effects: any[] = [
    CuentaTipoEffects, 
    ActividadEffects,
    TcpEffects,
    MayorEffects,   
    CentroCostoEffects   
]

export * from './cuenta_tipo.effects';
export * from './actividad.effects';
export * from './tcp.effects';
export * from './cuenta_mayor.effect';
export * from './centro_costo.effects';

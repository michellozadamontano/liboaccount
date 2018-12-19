import { CuentaTipoEffects }    from './cuenta_tipo.effects';
import {ActividadEffects }      from './actividad.effects'
import { TcpEffects }           from './tcp.effects';

export const effects: any[] = [
    CuentaTipoEffects, 
    ActividadEffects,
    TcpEffects   
]

export * from './cuenta_tipo.effects';
export * from './actividad.effects';
export * from './tcp.effects';
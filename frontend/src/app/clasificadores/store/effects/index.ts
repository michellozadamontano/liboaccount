import { CuentaTipoEffects }    from './cuenta_tipo.effects';
import {ActividadEffects }      from './actividad.effects'

export const effects: any[] = [
    CuentaTipoEffects, 
    ActividadEffects   
]

export * from './cuenta_tipo.effects';
export * from './actividad.effects';
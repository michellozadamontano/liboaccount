import { MonedaEffects }        from './moneda.effects';
import { TipoCuentaEffects }    from './tipo_cuenta.effects';
import { CuentaEffects }        from './cuenta.effects';
import { ProvinceEffects }      from './province.effects';
import { EntidadEffects }       from './entidad.effects';
import { CcostoEffects}         from './ccosto.effects';
import { TasasEffects }         from './tasas.effects';
import { GenericoEffects }      from './generico.effects';
import { SubmayorEffects}       from './submayor.effects';
import { AreasEffects }         from './areas.effects';
import { SubAreasEffects }      from './subareas.effects';

export const effects: any[] = [
    MonedaEffects, 
    TipoCuentaEffects, 
    CuentaEffects,
    ProvinceEffects,
    EntidadEffects,
    CcostoEffects,
    TasasEffects,
    GenericoEffects,
    SubmayorEffects,
    AreasEffects,
    SubAreasEffects,
]

export * from './moneda.effects';
export * from './tipo_cuenta.effects';
export * from './cuenta.effects';
export * from './province.effects';
export * from './entidad.effects';
export * from './ccosto.effects';
export * from './tasas.effects';
export * from './generico.effects';
export * from './submayor.effects';
export * from './areas.effects';
export * from './subareas.effects';
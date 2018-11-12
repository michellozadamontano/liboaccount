import { Moneda } from './moneda.interface';
import { TipoCuenta } from './tipo_cuenta.interface';
import { Ccosto } from './ccosto.interface';
export interface Cuenta {
    id          : number;
    cuenta      : string;
    descripcion : string;
    moneda      : Moneda;
    tipo_cuenta : TipoCuenta;
    ccosto      : Ccosto;
}
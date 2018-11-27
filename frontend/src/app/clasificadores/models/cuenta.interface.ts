export interface Cuenta {
    id              : number;
    cuenta          : string;
    descripcion     : string;
    moneda_id       : number;
    tipo_cuenta_id  : number;
    ccosto_id?      : number;
    predeterminada  : boolean;
}
import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const CLASIFICADORESITEMS = [
  { state: '/clasificadores/actividad', name: 'Actividades', type: 'link', icon: 'build' },  
  { state: '/clasificadores/tcp', name: 'tcp', type: 'link', icon: 'accessibility' },  
  { state: '/clasificadores/centro_costo', name: 'Centro Costo', type: 'link', icon: 'euro_symbol' },   
  
];
const PLANCUENTAS = [
  { state: '/clasificadores/cuentas', name: 'Plan Cuenta', type: 'link', icon: 'euro_symbol' },
  { state: '/clasificadores/mayor', name: 'Mayor', type: 'link', icon: 'euro_symbol' },
  { state: '/clasificadores/cuenta_tipo', name: 'Estructura', type: 'link', icon: 'euro_symbol' },
  { state: '/clasificadores/plan', name: 'Cuenta', type: 'link', icon: 'euro_symbol' },
]

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return CLASIFICADORESITEMS;
  }
  getCuentas(): Menu[]{
    return PLANCUENTAS;
  }
}

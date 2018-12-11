import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const CLASIFICADORESITEMS = [
  { state: '/clasificadores/cuenta_tipo', name: 'Tipo Cuenta', type: 'link', icon: 'euro_symbol' },  
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return CLASIFICADORESITEMS;
  }
}

import { Component, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  route: string;
  children?: ChildrenItems[];
}
const MENUITEMS = [
  {
      state: 'dashboard',
      name: 'Cuentas',
      type: 'link',
      icon: 'dashboard',
      route: 'clasificadores/cuentas'
  },
  {
      state: 'setting',
      name: 'Settings',
      type: 'sub',
      icon: 'settings',
      route: '',
      children: [
          {
              state: 'station_management',
              name: 'Station Management',
              type: 'parent',
              grand_children: [
                  { state: 'station', name: 'Station' },
                  { state: 'shifts_work', name: 'Shifts Work' },
                  { state: 'fuel_price', name: 'Fule Price' },
                  { state: 'tank_management', name: 'Tank Management' }
              ]
          }
      ]
  }
];

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    ); 
    

  constructor(private breakpointObserver: BreakpointObserver) {}
  getMenuitem(): Menu[] {
    return MENUITEMS;
}

}



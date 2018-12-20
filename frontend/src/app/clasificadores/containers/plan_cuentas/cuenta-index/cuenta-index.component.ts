import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                                 from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';
import { Router }                 from '@angular/router';
import { CuentaMayor } from 'src/app/clasificadores/models/cuenta_mayor.interface';

@Component({
  selector: 'app-cuenta-index',
  templateUrl: './cuenta-index.component.html',
  styleUrls: ['./cuenta-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaIndexComponent implements OnInit {

  mayorList$: Observable<CuentaMayor[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCuentaMayor());
    this.mayorList$ = this.store.select(fromStore.getMayorList);
  }

  add()
  {
    this.router.navigate(['clasificadores/mayor_new']);
  }
  edit(id:number)
  {
    this.router.navigate(['clasificadores/mayor_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCuentaMayor(id));
    }
    
  }

}

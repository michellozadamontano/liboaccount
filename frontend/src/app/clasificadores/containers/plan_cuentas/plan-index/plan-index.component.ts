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
import { CuentaPlanList }         from 'src/app/clasificadores/models/cuenta_plan_list.interface';
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-plan-index',
  templateUrl: './plan-index.component.html',
  styleUrls: ['./plan-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanIndexComponent implements OnInit {

  planList$ : Observable<CuentaPlanList[]>;
  

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCuentaPlan());    
    this.planList$ = this.store.select(fromStore.getCuentaList);
   
  }
  add()
  {
    this.router.navigate(['clasificadores/plan_new']);
  }
  update(id:number)
  {
    this.router.navigate(['clasificadores/plan_edit',id]);
  }
  delete(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCuentaPlan(id));
    }
    
  }

}

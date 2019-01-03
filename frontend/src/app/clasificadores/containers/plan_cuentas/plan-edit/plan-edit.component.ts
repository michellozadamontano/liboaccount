import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy 
}                                 from '@angular/core';

// ngrx
import { Store }                  from '@ngrx/store';
import { Observable, from }       from 'rxjs';
import * as fromStore             from '../../../store';

import { MatSnackBar }            from '@angular/material';

import { 
  Router, 
  ActivatedRoute }                from '@angular/router';
import { CuentaPlan }             from 'src/app/clasificadores/models/cuenta_plan.interface';
import { CuentaTipo } from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanEditComponent implements OnInit {  

  plan$ : Observable<CuentaPlan>;
  cuentaTipoList$ : Observable<CuentaTipo[]>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadCuentaPlanById(id));
    this.plan$ = this.store.select(fromStore.getCuentaPlan);

    this.store.dispatch(new fromStore.LoadCuentaTipo());
    this.cuentaTipoList$ = this.store.select(fromStore.getCuentaTipos);
  }
  submit(plan: CuentaPlan)
  {
    this.store.dispatch(new fromStore.UpdateCuentaPlan(plan));
    this.store.select(fromStore.getCuentaPlanMessage).subscribe(resp => {

      if(resp == 'ok')
      {
        this.router.navigate(['clasificadores/plan']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
      }
    })    
  }

}

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

import { Router }                 from '@angular/router';
import { CuentaPlan } from 'src/app/clasificadores/models/cuenta_plan.interface';
import { CuentaTipo } from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-plan-new',
  templateUrl: './plan-new.component.html',
  styleUrls: ['./plan-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanNewComponent implements OnInit {

  cuentaTipoList$ : Observable<CuentaTipo[]>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCuentaTipo());
    this.cuentaTipoList$ = this.store.select(fromStore.getCuentaTipos);
  }
  submit(plan: CuentaPlan)
  {
    this.store.dispatch(new fromStore.CreateCuentaPlan(plan));
    this.store.select(fromStore.getCuentaPlanMessage).subscribe(resp => {
      if(resp == '1')
      {
        this.snackBarService.dismiss();
        this.snackBarService.open( "Este codigo ya existe para esta estructura!", undefined, {duration: 2000} );     
        return;     
      }
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/plan']);
      }
    })
    
  }

}

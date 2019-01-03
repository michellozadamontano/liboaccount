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
import { CuentaMayor }            from 'src/app/clasificadores/models/cuenta_mayor.interface';
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';
import { CuentaPlan }             from 'src/app/clasificadores/models/cuenta_plan.interface';

@Component({
  selector: 'app-cuenta-index',
  templateUrl: './cuenta-index.component.html',
  styleUrls: ['./cuenta-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaIndexComponent implements OnInit {

  mayorList$: Observable<CuentaMayor[]>;
  tipoList$ : Observable<CuentaTipo[]>;
  planList$ : Observable<CuentaPlan[]>;

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
  updateMayor(id:number)
  {
    this.router.navigate(['clasificadores/mayor_edit',id]);
  }
  updateTipo(id:number)
  {
    this.router.navigate(['clasificadores/mayor_edit',id]);
  }
  updatePlan(id:number)
  {
    this.router.navigate(['clasificadores/mayor_edit',id]);
  }

  deleteMayor(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCuentaMayor(id));
    }
    
  }
  deleteTipo(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCuentaMayor(id));
    }
    
  }
  deletePlan(id:number)
  {
    const r = confirm('Estas Seguro?');
    if (r) {
      this.store.dispatch(new fromStore.DeleteCuentaMayor(id));
    }
    
  }
  getTipo(id:number){
    this.store.dispatch(new fromStore.GetCuentaTipoByGrupo(id));
    this.tipoList$  = this.store.select(fromStore.getCuentaTipos);
  }
  getPlan(id:number){
    this.store.dispatch(new fromStore.GetCuentaByTipo(id));
    this.planList$ = this.store.select(fromStore.getCuentaByTipoList);
  }

}

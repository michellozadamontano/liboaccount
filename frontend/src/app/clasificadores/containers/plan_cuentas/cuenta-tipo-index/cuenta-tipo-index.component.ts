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
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';
import { CuentaTipoService }      from 'src/app/services';

@Component({
  selector: 'app-cuenta-tipo-index',
  templateUrl: './cuenta-tipo-index.component.html',
  styleUrls: ['./cuenta-tipo-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoIndexComponent implements OnInit {

  cuenta_tipo_list$ : Observable<CuentaTipo[]>;

  constructor(
    private store: Store<fromStore.ClasificadorState>,  
    private router: Router,
    private tipoService: CuentaTipoService
  ) { }

  ngOnInit() {
   // this.store.dispatch(new fromStore.LoadCuentaTipo());
   // this.cuenta_tipo_list$ = this.store.select(fromStore.getCuentaTipos);
   this.cuenta_tipo_list$ = this.tipoService.getCuentaTipoList();
  }

  add()
  {
    this.router.navigate(['clasificadores/cuenta_tipo_new']);
  }
  edit(id:number)
  {
    this.router.navigate(['clasificadores/cuenta_tipo_edit',id]);
  }
  delete(id:number)
  {        
    const r = confirm('Estas Seguro?');
    if (r) {
      this.tipoService.deleteCuentaTipo(id).subscribe(resp => {
        console.log(resp);
        
      });
    }
    
  }

}

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

import { Router, ActivatedRoute }                 from '@angular/router';
import { CuentaTipo }             from 'src/app/clasificadores/models/cuenta_tipo.interface';

@Component({
  selector: 'app-cuenta-tipo-edit',
  templateUrl: './cuenta-tipo-edit.component.html',
  styleUrls: ['./cuenta-tipo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuentaTipoEditComponent implements OnInit {

  cuentaTipo$ : Observable<CuentaTipo>;

  constructor(
    private store           : Store<fromStore.ClasificadorState>,  
    private router          : Router,
    private ar              : ActivatedRoute,
    private snackBarService : MatSnackBar
  ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadCuentaTipoById(id));
    this.cuentaTipo$ =  this.store.select(fromStore.getCuentaTipo);
  }
  submit(cuentaTipo: CuentaTipo)
  {
    this.store.dispatch(new fromStore.UpdateCuentaTipo(cuentaTipo));
    this.store.select(fromStore.getCuentaTipoMessage).subscribe(resp => {
      
      if(resp = 'ok')
      {
        this.router.navigate(['clasificadores/cuenta_tipo']);
        this.snackBarService.dismiss();
        this.snackBarService.open( "Registro actualizado!", undefined, {duration: 2000} );     
        return;   
      }
    })
    
  }

}
